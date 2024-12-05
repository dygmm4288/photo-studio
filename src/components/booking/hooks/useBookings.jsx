import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { arrayToTimeObject, timeSlotsObject } from "../data/timeSlots";
import { db } from "../../../lib/firebase";

export const useBookings = () => {
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    try {
      const bookingsCollection = await getDocs(collection(db, "bookings"));

      // 예약 날짜와 시간을 가져오는 함수
      const bookingsByDate = bookingsCollection.docs.map((doc) => {
        const data = doc.data();
        const bookingDate = data.booking.date.toDate(); // 예약 날짜 firebase Timestamp를 Date로 변환
        const bookingTime = arrayToTimeObject(data.booking.times); // 예약 시간 배열을 객체로 변환
        return {
          date: bookingDate,
          times: bookingTime,
        };
      });

      // 예약 상태 여부를 확인해 주는 함수
      const calcBookingStatus = (bookingByDate) => {
        const totalTimeSlots = Object.entries(timeSlotsObject).length;

        return bookingByDate.map(({ date, times }) => {
          const bookedCount = Object.keys(times).reduce((count, key) => {
            return times[key] ? count + 1 : count;
          }, 0);

          const remainingSlots = totalTimeSlots - bookedCount;
          return {
            date,
            status: remainingSlots <= 0 ? "마감" : `잔여 ${remainingSlots}`,
            times,
          };
        });
      };

      const bookingStatus = calcBookingStatus(bookingsByDate);
      setBookings(bookingStatus);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  return { bookings, getBookings };
};
