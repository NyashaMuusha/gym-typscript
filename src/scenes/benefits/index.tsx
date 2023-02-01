import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic2 from "@/assets/BenefitsPageGraphic2.png";
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    title: "State of the Art Facilities",
    description:
      "Experience the ultimate workout with our cutting-edge equipment and amenities, including virtual training programs and personal training services.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 " />,
    title: "100s of Diverse Classes",
    description:
      "From high-intensity cardio to relaxing yoga, there is something for everyone.You will be able to challenge yourself and achieve your fitness goals in a supportive and inclusive environment",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 " />,
    title: "Expert and Pro Trainers",
    description:
      "Our gym is staffed by expert and professional trainers. With a wealth of knowledge and experience, they will provide you with personalized attention, guidance, and support to ensure that you get the most out of every workout",
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <Htext>MORE THAN JUST GYM</Htext>
          <p className="my-5 text-sm">
            Transform Your Body and Mind : A Comprehensive Fitness Experience
            with personalized training and support"
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="items-center justify-between gap-8 md:flex "
          initial="hideen"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto w-1/2 rounded-md"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic2}
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING {""}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>{" "}
              </div>
            </div>
            {/* DESCRIPTION*/}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                At our gym, we are proud to have helped millions of happy
                members achieve their fitness goals. Our supportive community
                and commitment to excellence make us the go-to destination for
                anyone looking to get fit and lead a healthier, happier life.
              </p>
              <p className="mb-5">
                With a wide range of classes, state-of-the-art facilities, and
                expert trainers, our members have access to everything they need
                to reach their fitness goals. And with a welcoming and inclusive
                atmosphere, everyone feels comfortable and motivated to achieve
                their best.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  JOIN NOW
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Benefits;
