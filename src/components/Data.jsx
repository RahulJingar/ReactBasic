import React from 'react';
import AllProjectAdd from './AllProjectAdd';

const Data = () => {
  const data = [
    {
      image: 'https://t3.ftcdn.net/jpg/00/26/12/44/360_F_26124443_QQVqQWwQGQFqBQg9QACdpktxYQ7xIRkY.jpg',
      ProductName: 'Add To Cart',
      paragraph: `Easily add your favorite items to the cart with just one click. Review your selections anytime and enjoy a smooth and hassle-free shopping experience before you checkout.`,
      link: 'https://relaxed-concha-dce25b.netlify.app/',
    },
    {
      image: 'https://cyberpedia.reasonlabs.com/IMG/password%20generator.jpg',
      ProductName: 'Password Generator',
      paragraph: 'Create strong and secure passwords instantly with our Password Generator. Whether for personal or professional use, generate random passwords that keep your accounts safe and protected from hackers.',
      link: 'https://incandescent-elf-1014a9.netlify.app/',
    },
    {
      image: 'https://www.shutterstock.com/image-photo/project-manager-works-updates-tasks-260nw-2508630707.jpg',
      ProductName: 'Quiz App',
      paragraph: 'Welcome to our app! This simple and user-friendly platform is designed to make your tasks easier and faster. Explore the features, enjoy the smooth experience, and stay connected with everything that matters to you.',
      link: 'https://quiz-app-rahul.netlify.app/',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Multi-State_Lottery_Association_members_map.svg/640px-Multi-State_Lottery_Association_members_map.svg.png',
      ProductName: 'Plan With Rahul',
      paragraph: 'Plan your trip effortlessly by adding multiple places to your journey. Explore destinations, create a personalized route, and manage your travel stops all in one place for a smooth and memorable experience.',
      link: 'https://plan-rahul.netlify.app/',
    },
    {
      image: 'https://www.pnbmetlife.com/content/dam/pnb-metlife/images/icons/bmi-calculator/meter.png',
      ProductName: 'Bmi Calculater',
      paragraph: "Easily calculate your Body Mass Index (BMI) to understand your health better. Just enter your height and weight to check if you're underweight, normal, overweight, or obese — and take steps toward a healthier lifestyle.",
      link: 'https://zesty-kitten-453383.netlify.app/',
    },
    {
      image: 'https://img-c.udemycdn.com/course/750x422/4232092_8fc0.jpg',
      ProductName: 'Razorpay Clone',
      paragraph: "Experience seamless and secure online payments with our Razorpay clone. From accepting payments to managing transactions, this solution is built for speed, reliability, and business growth.",
      link: 'https://razorpay-clone-rahul.netlify.app/',
    },
  ];

  return (
    <div>
      <AllProjectAdd user={data} />
    </div>
  );
};

export default Data;
