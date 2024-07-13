

import React, { useState } from 'react';
import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistics';
import Section from './Section/Section';
import CustomNotification from './CustomNotification/CustomNotification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    const positiveFeedback = (good / total) * 100;
    return Math.round(positiveFeedback);
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = totalFeedback === 0 ? 0 : countPositiveFeedbackPercentage();
  const feedbackOptions = Object.keys(feedback);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <CustomNotification message="No feedback given" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positiveFeedback={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;


//original code to useState

// // import React, { Component } from 'react';
// // import FeedbackOptions from './Feedback/Feedback';
// // import Statistics from './Statistics';
// // import Section from './Section';
// // import CustomNotification from './CustomNotification/CustomNotification';

// import React, { useState } from 'react';
// import FeedbackOptions from './Feedback/Feedback';
// import Statistics from './Statistics';
// import Section from './Section/Section';
// import CustomNotification from './CustomNotification/CustomNotification';


// // class App extends Component {
// //   state = {
// //     good: 0,
// //     neutral: 0,
// //     bad: 0,
// //   };

// const App = () => {
//   const [feedback, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });
// }

//   // onLeaveFeedback = option => {
//   //   this.setState(prevState => ({
//   //     [option]: prevState[option] + 1,
//   //   }));
//   // };

// const onLeaveFeedback = option => {
//   setFeedback(prevFeedback => ({
//     ...prevFeedback,
//     [option]: prevFeedback[option] + 1,
//   }));
// };

//   // countTotalFeedback = () => {
//   //   const { good, neutral, bad } = this.state;
//   //   return good + neutral + bad;
//   // };

// const countTotalFeedback = () => {
//   const { good, neutral, bad } = feedback;
//   return good + neutral + bad;


//   // countPositiveFeedbackPercentage = () => {
//   //   const { good } = this.state;
//   //   const total = this.countTotalFeedback();
//   //   const positiveFeedback = (good / total) * 100;
//   //   return Math.round(positiveFeedback);
//   // };

// const countPositiveFeedbackPercentage = () => {
//   const { good } = feedback;
//   const total = countTotalFeedback();
//   const positiveFeedback = (good / total) * 100;
//   return Math.round(positiveFeedback);
// };

// const totalFeedback = countTotalFeedback();
// const positivePercentage = 
//   totalFeedback === 0 ? 0 : countPositiveFeedbackPercentage();
// const feedbackOptions = Object.keys(feedback);

//   // render() { 
//   //   const { good, neutral, bad } = this.state;
//   //   const totalFeedback = this.countTotalFeedback();
//   //   const positivePercentage =
//   //     totalFeedback === 0 ? 0 : this.countPositiveFeedbackPercentage();

//   //   const feedbackOptions = Object.keys(this.state);

//     // return (
//     //   <>
//     //     <Section title="Please leave feedback">
//     //       <FeedbackOptions
//     //         options={feedbackOptions}
//     //         onLeaveFeedback={this.onLeaveFeedback}
//     //       />
//     //     </Section>

//     //     <Section title="Statistics">
//     //       {totalFeedback === 0 ? (
//     //         <CustomNotification message="No feedback given" />
//     //       ) : (
//     //         <Statistics
//     //           good={good}
//     //           neutral={neutral}
//     //           bad={bad}
//     //           total={totalFeedback}
//     //           positiveFeedback={positivePercentage}
//     //         />
//     //       )}
//     //     </Section>
//     //   </>
//     // );

// return (
//   <>
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//       options={feedbackOptions}
//       onLeaveFeedback={onLeaveFeedback}
//     />
//     </Section>

//     <Section title="Statistics">
//       {totalFeedback === 0 ? (
//         <CustomNotification message="No feedback given" />
//       ) : (
//         <Statistics
//         good={feedback.good}
//         neutral={feedback.neutral}
//         bad={feedback.bad}
//         total={totalFeedback}
//         positiveFeedback={positivePercentage}
//         />
//       )}
//     </Section>
//       </>
//   );
// };

// export default App;
