
import React from 'react'
import { questionsArrAtom } from "../../recoil/questionsRecoi";

import styles from './que-info-card.module.css'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BasicButtons from "../button/button"
import { useRecoilState } from "recoil";
import DeleteIcon from '@mui/icons-material/Delete';



function deleteIcon(){
    return (
        <DeleteIcon />
    )
}
    




export default function QueInfo({ qa, index }) {



    const [question, setQuestion] = useRecoilState(questionsArrAtom)

    function handleDelete(id) {
        console.log(question)
        const newQAList = question.filter((element) => element.queId != id)
        setQuestion([...newQAList])
    }
    return (
        <div key={qa.queId}>
            <Accordion  >
                <div className={styles.containerDiv}>
                    <div className={styles.queContiner}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography> {`Q${index + 1} : ${qa.question}`}</Typography>
                        </AccordionSummary>
                    </div>
                    <div>
                        <BasicButtons  className={styles.containerDl}  btText="Delete"  DeleteIcon={deleteIcon} onClick={() => { handleDelete(qa.queId) }} />
                    </div>

                </div>
                <div className={styles.ansContainer}>
                    <AccordionDetails>
                        <Typography>{`Ans${index + 1} :  ${qa.ans}`}</Typography>
                    </AccordionDetails>
                </div>

            </Accordion>

        </div>
    )
}