import { containerMotion } from "../helpers/containerMotion"
import FinalInvoice from "./FinalInvoice"
import Heading from "./Heading"
import TwoButtons from "./TwoButtons"
import { motion } from "framer-motion"

function FinishingUp() {
    return (
        <motion.div variants={containerMotion} animate="visible" initial="hidden" exit="exit">
            <Heading title="Finishing up">
                Double-check everything looks OK before confirming.
            </Heading>
            <FinalInvoice />
            <TwoButtons firstButton="back" lastButton="confirm" />
        </motion.div>
    )
}

export default FinishingUp
