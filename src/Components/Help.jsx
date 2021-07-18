const Help = (props) => {
  const { askAudienceUsed, askHostUsed, fiftyUsed } = props;
  return (
    <div className="help-buttons">
      <button onClick={() => props.onClick("askAudience")}>
        <svg width="100" height="50">
          <polygon points="18,24 15,42 35,42 38,27 42,24 34,19 26,19" />
          <circle cx="30" cy="11" r="8" />

          <polygon points="58,24 62,27 65,42 85,42 82,24 74,19 66,19" />
          <circle cx="70" cy="11" r="8" />

          <polygon points="38,27 35,45 65,45 62,27 54,22 46,22" />
          <circle cx="50" cy="14" r="8" />

          <line
            className={"cross " + (askAudienceUsed ? "" : "cross-hidden")}
            x1="0"
            y1="0"
            x2="100"
            y2="50"
          />
          <line
            className={"cross " + (askAudienceUsed ? "" : "cross-hidden")}
            x1="100"
            y1="0"
            x2="0"
            y2="50"
          />
        </svg>
      </button>
      <button onClick={() => props.onClick("fifty")}>
        <svg width="100" height="50">
          <text fill="#ffffff" fontSize="25" x="12" y="33">
            50 : 50
          </text>

          <line
            className={"cross " + (fiftyUsed ? "" : "cross-hidden")}
            x1="0"
            y1="0"
            x2="100"
            y2="50"
          />
          <line
            className={"cross " + (fiftyUsed ? "" : "cross-hidden")}
            x1="100"
            y1="0"
            x2="0"
            y2="50"
          />
        </svg>
      </button>
      <button onClick={() => props.onClick("askHost")}>
        <svg width="100" height="50">
          <defs>
            <pattern id="beard" viewBox="0,0,5,10" width="15%" height="40%">
              <line x1="-1.4" y1="-0.2" x2="-0.8" y2="5" />
              <line x1="0" y1="-0.5" x2="0.3" y2="4" />
              <line x1="0.2" y1="5" x2="0.7" y2="10" />
              <line x1="2" y1="3" x2="2.2" y2="8" />
              <line x1="1.7" y1="-0.3" x2="1.3" y2="3" />
              <line x1="3.3" y1="0.3" x2="3" y2="4" />
              <line x1="4.5" y1="3" x2="4.7" y2="6" />
              <line x1="4" y1="7" x2="3.6" y2="10.3" />
              <line x1="5.5" y1="0.2" x2="5.6" y2="4" />
              <line x1="5.3" y1="5" x2="5" y2="9.2" />
              <line x1="7" y1="5" x2="6.4" y2="9.2" />
            </pattern>
          </defs>

          <polygon
            className="hair"
            points="71,20 72,25 72,30 71.5,50 66,55 67,20 71,20 69,13"
          />
          <ellipse cx="50" cy="24" rx="19" ry="22" />
          <polygon
            className="hair"
            points="45,40 40,38 35,35 31.5,32 33,40 37,44 45,47 50,48 55,47 63,44 67,40 69,32 65,35 60,38 55,40"
          />
          <polygon
            className="hair"
            points="45,33 38,35 40,33 47,31 53,31 60,33 62,35 55,33"
          />
          <polygon
            className="hair"
            points="45,7 40,8 36,10 32,16 33.5,10 36,7 40,3.5 45,2 55,2 60,3.5 64,7 67,10 69,14 65,10 61,8 56,7 50,8"
          />
          <circle cx="41" cy="21" r="6" />
          <circle cx="59" cy="21" r="6" />
          <line x1="35" y1="20" x2="29" y2="17" />
          <line x1="65" y1="20" x2="69" y2="18" />
          <line x1="47" y1="20" x2="53" y2="20" />

          <line
            className={"cross " + (askHostUsed ? "" : "cross-hidden")}
            x1="0"
            y1="0"
            x2="100"
            y2="50"
          />
          <line
            className={"cross " + (askHostUsed ? "" : "cross-hidden")}
            x1="100"
            y1="0"
            x2="0"
            y2="50"
          />
        </svg>
      </button>
    </div>
  );
};

export default Help;
