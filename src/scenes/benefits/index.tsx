import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    title: "State of the Art Facilities",
    description:
      " aut consequatur tempora sed omnis veritatis et totam autem. Et architecto facilis eos praesentium rerum qui cumque debitis sit voluptas excepturi.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 " />,
    title: "100s of Diverse Classes",
    description:
      " aut consequatur tempora sed omnis veritatis et totam autem. Et architecto facilis eos praesentium rerum qui cumque debitis sit voluptas excepturi.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 " />,
    title: "Expert and Pro Trainers",
    description:
      " aut consequatur tempora sed omnis veritatis et totam autem. Et architecto facilis eos praesentium rerum qui cumque debitis sit voluptas excepturi.",
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <Htext>MORE THAN JUST GYM</Htext>
          <p className="my-5 text-sm">
            Transform Your Body and Mind : A Comprehensive Fitness Experience
            with personalized training and support"
          </p>
        </div>
        {/* BENEFITS */}
        <div className="items-center justify-between gap-8 md:flex ">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Benefits;
