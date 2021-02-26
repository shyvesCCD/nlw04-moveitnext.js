import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const {
    level,
    levelUp,
    experienceToNextLevel,
    currentExperience,
  } = useContext(ChallengesContext);

  if (currentExperience >= experienceToNextLevel) {
    levelUp();
  }

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/shyvesCCD.png" alt="Pedro Chaves" />
      <div>
        <strong>Pedro Chaves</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
