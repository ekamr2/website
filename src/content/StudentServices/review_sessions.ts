type ReviewSession = {
  course: string;
  time: string;
  location: string;
  slidesLink?: string;
  worksheetLink?: string;
  recordingLink?: string;
  keyLink?: string;
  /**
   * If set, the key link will not be published
   * until the time and date (in CST) specified by the below.
   * You must follow JS date string format. For example,
   * to release on March 14th at 3PM central time, use the following
   * string:
   * ```
   * 2022-03-14T15:00:00-05:00
   * ```
   * (the `-05:00` indicates that CST is 5 hours behind UTC).
   *
   * *If no key release time is specified, the key will be accessible immediately*
   * *If there is no worksheet, the key will not be displayed*
   */
  keyReleaseTime?: string;
};

export const reviewSessions: Record<1 | 2 | 3, ReviewSession[]> = {
  1: [
    {
      course: "ECE 210",
      time: "9/16, 12:30-3:00PM",
      location: "ECEB 1013",
      slidesLink:
        "https://docs.google.com/presentation/d/1CXofOoxZtO_cR1BebHQkYRe13f3pgFGrI8qTSA3OKug/edit?usp=sharing",
    },
    {
      course: "ECE 329",
      time: "9/16, 3:00-5:30PM",
      location: "ECEB 1013",
    },
    {
      course: "ECE 120",
      time: "9/16, 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1I4ZS-_0Etu7jwnx0D7A4Scd7oEGkFKFMThA1Q-XDR48/edit?usp=sharing",
    },
    {
      course: "ECE 350",
      time: "9/16, 3:00-5:30PM",
      location: "ECEB 3015",
      slidesLink:
        "https://docs.google.com/presentation/d/1ZE0piNmhcMcQdak_Kk_NHYDkpmR82QnQDZGtrPL89wA/edit?usp=sharing",
    },
    {
      course: "ECE 374B",
      time: "9/17, 12:30-3:00PM",
      location: "ECEB 1002",
      slidesLink:
        "https://drive.google.com/file/d/17L-drxEQNKRLHoSRvSBL7QIub20A1ADJ/view?usp=sharing",
    },
    {
      course: "ECE 220",
      time: "9/17, 12:30-3:00PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1cpcY2Ew17Ohvo0O3EfwxhTan90mxuxk3ixhEac0M4wg/edit?usp=sharing",
    },
    {
      course: "ECE 342",
      time: "9/17, 12:30-3:00PM",
      location: "ECEB 3017",
      slidesLink:
        "https://docs.google.com/presentation/d/1L9h0rWMtx8yyRTc59ia8tQt4R-iXdfYbDpD09YZsFok/edit?usp=sharing",
    },
    {
      course: "ECE 110",
      time: "9/17, 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1Oh-aqrL1W4NiW9eirWWPyRiRd8GkcS8DU-xe6mHMP-4/edit?usp=sharing",
    },
    {
      course: "ECE 411",
      time: "9/17, 3:00-5:30PM",
      location: "ECEB 3017",
      slidesLink:
        "https://docs.google.com/presentation/d/1j_Zn5haeTgr32OCv5dbMbQ1pwwj98LcdMG4gOxf2Gy0/edit?usp=sharing",
    },
    {
      course: "CS 374A",
      time: "9/24 3:00-5:30PM",
      location: "ECEB 1002",
    },
  ],
  2: [],
  3: [],
};

// When the UI should rollover stop showing the given review session
// Remember that months are zero indexed but days are not.
export const until: Record<1 | 2 | 3, Date> = {
  1: new Date(2023, 8, 5),
  2: new Date(2023, 11, 10),
  3: new Date(1), // Date(1) makes sure this will never be default bc it occured in the past
};

export const crammingCarnival: ReviewSession[] = [];
