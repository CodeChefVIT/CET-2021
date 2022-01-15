import React from "react";
import "./PartnerCard.css";

export default function PartnerCard(props) {
  return (
    <div className="partner-card lg:m-8">
      <div
        className="partner-desc"
        style={{
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <div className="partner-desc__title">
          <h4>
            {props.title}
          </h4>
        </div>
        <div className="partner-desc__subtitle">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
