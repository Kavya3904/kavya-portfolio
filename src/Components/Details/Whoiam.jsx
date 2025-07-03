import React from "react";
import { motion } from "framer-motion";
import "./Details.css";
import kavya from "../../assets/KavEdited.jpeg";

export default function Whoiam() {
  return (
    <div className="main-div-whoiam ">
      <div className="whoiam-main-div">
        <div>
          <motion.div
            className="whoiam-heading-row"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="whoiam-heading">
              <span className="highlight">
                My Accidental Love Story with Tech 💘
              </span>
              <br />
            </div>
          </motion.div>

          <motion.div
            className="whoiam-content-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="whoiam-image-side">
              <img src={kavya} alt="Kavya" className="whoiam-main-img" />
            </div>

            <div className="whoiam-scrollbox">
              <div className="story-paragraphs">
                <p>
                  Hi! I’m <strong>Kavya</strong>, and let me tell you a little
                  plot twist from my life 👇
                  <strong>Once</strong> upon a time in 10th grade...{" "}
                  <span className="highlight-alt">JAVA entered the chat</span> —
                  and I wanted nothing to do with it. My survival plan? Guess
                  what! Memorize every line and escape coding forever. 💀
                </p>

                <p>
                  But life had other plans. In college, I landed in Computer
                  Science 😶. I walked straight into the fire. But surprise! I
                  found amazing teachers who actually made things make sense
                  🔥📘. I started finishing lab exams in under 15 minutes 🧪,
                  but still... coding wasn’t "it" for me. And don’t even get me
                  started on those{" "}
                  <span className="strikethrough">cubic vibes</span> 🧊.
                </p>

                <p>
                  Then came Flutter... I tried some UI projects — pretty cool,
                  *until* I saw class components.{" "}
                  <span className="nope">NOPE.</span> 🚪 And then... ReactJS
                  walked in. <span className="bold-hook">With Hooks.</span> ❤️
                  That was it — love at first sight.
                </p>

                <p>
                  I binged HTML, CSS, JS like a kid on cartoons 📺. Skipped
                  sleep, skipped food — I just wanted things to work! I even
                  started loving errors because every bug powered up my Googling
                  skills 🐞🔍.
                </p>

                <p>
                  No bootcamps. No paid courses. Just me and YouTube. My
                  personal GOD 🙏📺. Bless those infinite tutorials.
                </p>

                <p>
                  Then — landed my first job. As a mentor. 😳 Shy me. Stage
                  fear? ✅. And when I saw a full room of students, half my
                  confidence vanished 😅. My first real challenge? Build a JS
                  calculator. I blanked. Hard.
                </p>

                <p>
                  That was the moment I realized something was missing in my
                  learning. I almost gave up... But I remembered my favorite
                  quote:{" "}
                  <span className="quote">"Everything is figureoutable."</span>{" "}
                  💪 So I stayed. I tried. I figured it out.
                </p>

                <p>
                  Sports taught me mistakes are the best teachers 🏸🏃‍♀️. And that
                  the reward is in the grind, not just the win. Today, I may not
                  be the most expert developer in the room — but I’m a
                  relentless learner, a curious mind, and someone who gives 100%
                  every single time 💯✨.
                </p>

                <p>
                  For me, life is about learning, building, breaking, fixing,
                  and exploring. I dream of new skills, new ideas, and new
                  places — not just to visit, but to live and work 🌍💻
                </p>

                <p>
                  One day, I’ll open my laptop in Japan, Korea, Thailand, or
                  Switzerland — with a warm drink ☕, beautiful views 🏞️, and my
                  code running perfectly. That’s the dream. And I’m coding my
                  way there. 🚀
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="education-section">
          <div className="EduSecHeading">Education</div>

          <div className="edu-timeline">
            <div className="edu-item">
              <span className="edu-degree">B.Sc Computer Science</span>
              <span className="edu-place">IHRD College, Vazhakkad</span>
              <span className="edu-score">(74%)</span>
            </div>

            <div className="edu-item">
              <span className="edu-degree">12th (Bio-Maths)</span>
              <span className="edu-place">Savio Higher Secondary School</span>
              <span className="edu-score">(70%)</span>
            </div>

            <div className="edu-item">
              <span className="edu-degree">10th</span>
              <span className="edu-place">Auxilium Nava Jyoti School</span>
              <span className="edu-score">(80%)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="social-section">
        <div className="section-title">🔗 Connect with Me</div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/kavyamavila/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>

          <a href="mailto:kavya3904@gmail.com" className="social-link gmail">
            <i className="fas fa-envelope"></i> kavya3904@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
