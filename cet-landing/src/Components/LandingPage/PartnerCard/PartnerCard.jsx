import React from "react";
import "./PartnerCard.css";

export default function PartnerCard(props) {
  return (
    <div class="partner-card lg:m-8">
      <div
        class="partner-desc"
        style={{
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <div class="partner-desc__title">
          <h4>
            {props.title}
          </h4>
        </div>
        <div class="partner-desc__subtitle">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
