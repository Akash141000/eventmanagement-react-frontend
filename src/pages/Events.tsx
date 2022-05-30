import { useEffect, useState } from "react";
import { getEvents } from "../services/api";

const Events = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async ()=>{
  const response =  await getEvents();
    setEvents(response.data)
}


  useEffect(()=>{
    fetchEvents()
  },[])

  return (
    <div>
      {events.map((event) => {
        return (
          <div>
            <div>Title</div>
            <div>Image</div>
            <div>BookNow btn</div>
            <div>
              <div>Start</div>
              <div>End</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Events };
