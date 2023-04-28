import React from "react";

const APODViewer = (props) => {
  const { bundazatenpropsolmuyormu } = props;
  return (
    <div>
      <p>{bundazatenpropsolmuyormu.date}</p>
      <p>{bundazatenpropsolmuyormu.explanation}</p>
      <img
        src={bundazatenpropsolmuyormu.hdurl}
        alt={bundazatenpropsolmuyormu.explanation}
      />
      <p>
        {bundazatenpropsolmuyormu.media_type}
        {bundazatenpropsolmuyormu.service_version}
      </p>

      <div>
        {bundazatenpropsolmuyormu.title}
        <img
          src={bundazatenpropsolmuyormu.url}
          alt={bundazatenpropsolmuyormu.explanation}
        />
      </div>
    </div>
  );
};
export default APODViewer;
