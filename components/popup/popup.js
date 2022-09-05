import * as React from "react";
import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import BasicButtons from "../button/button";
import { questionsArrAtom } from "../../recoil/questionsRecoi";
import { useRecoilState } from "recoil";
import styles from './popup.module.css'





export default function FormDialog({ open, onClickClose }) {

    const [questionDetils, setQuestionDetils] = useState({})
    const [question, setQuestion] = useRecoilState(questionsArrAtom)
    // change to norml functions
    function handleOnChange(key, value) {
        if (key === 'question') {
            setQuestionDetils(
                {
                    ...questionDetils, question: value
                }
            )
            return
        }


        setQuestionDetils({ ...questionDetils, ans: value})
    }

    function handleClickSubmit() {
        onClickClose()
        if (Object.keys(questionDetils).length != 2) {
            alert("Please type your QA first before submission")
            return
        }

        if(Object.values(questionDetils)[0].trim().length == 0 && Object.values(questionDetils)[1].trim().length== 0){
            alert("Your text feild is empty")
            return
        }
        setQuestion([...question,{...questionDetils, queId : Math.floor(Math.random() * 1000000)}])
        setQuestionDetils({})
       


    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Dialog open={open}>
                    <div className={styles.titleContainer}>
                        <DialogTitle><b>Add QA</b></DialogTitle>
                    </div>

                    <div className={styles.contentContainer}>



                        <DialogContent>
                            <TextField
                                required
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Type your question"
                                multiline
                               
                                type="text"
                                fullWidth = {true}
                                variant="standard"
                                onChange={(e) => handleOnChange('question', e.target.value)}
                            />
                            <TextField
                                required
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Type your solution"
                                type="text"
                                multiline
                                fullWidth
                                variant="standard"
                                onChange={(e) => handleOnChange('answer', e.target.value)}
                            />
                        </DialogContent>
                    </div>
                    <DialogActions>
                        <BasicButtons btText='Submit' onClick={handleClickSubmit} />
                        <BasicButtons btText='Close' onClick={onClickClose} />
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}