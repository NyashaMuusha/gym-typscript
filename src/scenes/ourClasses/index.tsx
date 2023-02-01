import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Our weight training classes provide a comprehensive workout designed to build strength, increase muscle mass, and improve overall fitness, utilizing resistance equipment and free weights to target specific muscle groups and help you reach your goals.",
    image: image1,
  },
  {
    name: "Training Classes",
    description:
      "Our training classes are designed to help you reach your fitness goals and maximize your potential, offering a challenging and personalized workout experience led by expert trainers who will provide guidance and support every step of the way",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Our ab core classes focus on strengthening and toning the abdominal muscles, utilizing a variety of exercises and techniques to help you achieve a stronger, leaner core and improve your overall fitness and posture",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Our adventure classes offer a unique and exciting way to get fit, combining thrilling outdoor experiences with a challenging workout to give you an adrenaline-fueled experience unlike any other",
    image: image4,
  },
  {
    name: "Yoga Classes",
    description:
      "Our yoga classes offer a relaxing and rejuvenating workout experience, combining physical postures, breathing techniques, and mindfulness practices to improve flexibility, balance, and mental well-being",
    image: image5,
  },
  {
    name: "HIT Training Classes",
    description:
      "Our HIT (High Intensity Training) classes provide a challenging, full-body workout designed to maximize calorie burn, improve cardiovascular fitness, and build strength, utilizing short, intense bursts of exercise to push you to your limits and achieve your fitness goals.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      className="w-full bg-primary-100 py-40"
      id={SelectedPage.OurClasses}
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext> OUR CLASSES</Htext>
            <p className="py-5 ">
              Our gym offers a dynamic and diverse range of classes designed to
              challenge and inspire. From high-intensity cardio to mindfulness
              practices like yoga, our classes are led by experienced
              instructors and offer something for every fitness level and
              interest.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
export default OurClasses;
