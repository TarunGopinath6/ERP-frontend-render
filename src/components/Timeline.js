import React, {useState} from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const TimelineComponent = ({ events }) => {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const getDotColor = (event) => {
    const today = new Date();
    const [day, month, year] = event.date.split('-');
    const dueDate = new Date(`${month}-${day}-${year}`);
    const timeDiff = dueDate - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    if (event.completed) {
      return '#12B60F'; // Green for completed events
    } else if (daysDiff>=0) {
      return '#bebebe'; // Yellow for the current event
    } else if (daysDiff<-7) {
      return 'red'; // Yellow for the current event
    }else {
      return '#ff6b00'; // Gray for upcoming events
    }
  };

  const handleEventClick = (index) => {
    if (expandedEvent === index) {
      setExpandedEvent(null); // If the event is already expanded, collapse it
    } else {
      setExpandedEvent(index); // Otherwise, expand this event
    }
  };

  return (
    <Timeline position = "alternate">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: getDotColor(event) }} />
            {index !== events.length - 1 && <TimelineConnector style={{ backgroundColor: getDotColor(event) }}/>}
          </TimelineSeparator>
          <TimelineContent onClick={() => handleEventClick(index)}>
            <p style={{ fontWeight: 'bold' }}>{event.title}</p>
            <p>{event.date}</p>
            {expandedEvent === index && event.subEvents.map((subEvent, subIndex) => (
              <p key={subIndex} style={{ color: getDotColor(subEvent), fontWeight: subEvent.current ? 'bold' : 'normal' }}>
                {subEvent.title} <br></br> {subEvent.date}
              </p>
              
            ))}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineComponent;
