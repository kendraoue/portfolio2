import React, { useState } from "react";

const ABOUT_MESSAGES = [
  "Hey! I'm Kendra.",
  "Application Developer — a creative, bubbly developer with a passion for learning new technologies.",
  "Former dental assistant turned full-stack developer.",
  "I bring empathy, precision, and a passion for creating impactful digital solutions.",
  "I work with C#, TypeScript, JavaScript, Python, and SQL, primarily building applications with .NET, React, and ASP.NET Core. I have experience with SQL Server, Cosmos DB, PostgreSQL, Azure cloud services, Docker, CI/CD, API testing, and AI tools like OpenAI and Cursor.",
];

const MAX_MESSAGE_LENGTH = 40;
const MESSAGE_PATTERN = /^[A-Za-z0-9 ]*$/;

function sanitizeDraft(value) {
  return value.replace(/[^A-Za-z0-9 ]/g, "").slice(0, MAX_MESSAGE_LENGTH);
}

export function AboutPanel() {
  const [draft, setDraft] = useState("");
  const [userMessages, setUserMessages] = useState([]);

  const trimmedDraft = draft.trim();
  const canSend =
    userMessages.length === 0 &&
    trimmedDraft.length > 0 &&
    MESSAGE_PATTERN.test(trimmedDraft);

  const handleDraftChange = (event) => {
    setDraft(sanitizeDraft(event.target.value));
  };

  const handleSend = () => {
    if (!canSend) return;
    setUserMessages([trimmedDraft]);
    setDraft("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="about-panel d-flex flex-column h-100 overflow-hidden">
      <div className="about-panel__top">
        <div className="row g-0 m-0 h-100 align-items-center justify-content-center">
          <div className="col-12 p-0 text-center text-white fw-semibold">
            Kendra Ouellet
          </div>
        </div>
      </div>

      <div className="about-panel__body flex-grow-1">
        <div className="about-bubble-thread">
          <div className="yours messages">
            {ABOUT_MESSAGES.map((text, index) => (
              <div
                key={index}
                className="message about-bubble-enter"
                style={{ animationDelay: `${0.2 + index * 0.34}s` }}
              >
                {text}
              </div>
            ))}
          </div>
          {userMessages.length > 0 && (
            <div className="mine messages">
              {userMessages.map((text) => (
                <div
                  key={text}
                  className="message about-bubble-enter about-bubble-enter--sent"
                >
                  {text}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="about-panel__bottom">
        <div className="row g-2 align-items-center m-0">
          <div className="col-8">
            <input
              type="text"
              className="form-control about-panel__input"
              placeholder="Message"
              aria-label="Message"
              value={draft}
              onChange={handleDraftChange}
              onKeyDown={handleKeyDown}
              maxLength={MAX_MESSAGE_LENGTH}
              disabled={userMessages.length > 0}
            />
          </div>
          <div className="col-4">
            <button
              type="button"
              className="about-panel__send w-100"
              disabled={!canSend}
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
