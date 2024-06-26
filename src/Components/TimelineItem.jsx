import React from 'react';
import "react-vertical-timeline-component/style.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import timelineData from '../Datas/timelinedatas.json';


export const TimelineItem = () => {
    return (
        <>
        {timelineData.map((data, index) =>
            <div>
                <h3>{data.jobtitle}</h3>
                <h4>{data.company}</h4>
                <h5>{data.date}</h5>
                <p>{data.description}</p>

            </div>
            )}
        </>
        );
    };
