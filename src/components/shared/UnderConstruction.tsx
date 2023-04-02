import React from "react";

export default function UnderConstruction({
  subject,
}: {
  subject: string;
}) {
  return (
    <div className="under-construction">
      <div className="under-construction__content">
        <div className="under-construction__message">
          <div className="under-construction__word--subject">
            Content
          </div>
          <div className="under-construction__word--under-construction">
            Under
            <br/>
            Construction
          </div>
        </div>
        <img
          className="under-construction__img"
          src={require(`../../assets/misc/profile_IsaacHuang.png`)}
          alt="profile_IsaacHuang"
        />
      </div>
      <div className="under-construction__inquiries">
        Please feel free to contact me for any inquiries:
        <br/>
        <a href="mailto:isaac.huang.tw@gmail.com">
          isaac.huang.tw@gmail.com
        </a>
      </div>
    </div>
  );
}
