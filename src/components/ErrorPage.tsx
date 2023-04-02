import React from "react";

export default function ErrorPage({
  subject,
}: {
  subject: string;
}) {
  return (
    <div className="error-page">
      <div className="error-page__content">
        <div className="error-page__message">
          <div className="error-page__word--subject">
            {subject}
          </div>
          <div className="error-page__word--not-found">
            Not
            <br/>
            Found
          </div>
        </div>
        <img
          className="error-page__img"
          src={require(`../assets/misc/profile_IsaacHuang.png`)}
          alt="profile_IsaacHuang"
        />
      </div>
    </div>
  );
}
