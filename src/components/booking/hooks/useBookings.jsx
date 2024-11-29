import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { timeSlots } from "../data/timeSlots";

export const useBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const bookingCollection = await getDocs(collection(db, "booking"));

      // 예약된 날짜와 시간 그룹화
      const bookingsByDate = bookingCollection.docs.reduce((acc, doc) => {
        const data = doc.data();
        const bookingDate = data.selectedDate.toDate();
        const bookingTime = data.selectedTime;

        if (!acc[bookingDate]) {
          acc[bookingDate] = [];
        }

        acc[bookingDate].push(...bookingTime);
        return acc;
      }, {});

      const bookingStatus = Object.entries(bookingsByDate).map(
        ([date, times]) => {
          const remainingTimeSlots = timeSlots.length - times.length;
          return {
            date: new Date(date),
            status:
              remainingTimeSlots <= 0 ? "마감" : `잔여 ${remainingTimeSlots}`,
            times,
          };
        }
      );

      setBookings(bookingStatus);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [bookings]);

  return { bookings, fetchBookings };
};
