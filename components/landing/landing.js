import React from 'react'
import { useState } from 'react';

import BasicButtons from "../button/button"
import FormDialog from "../popup/popup";
import { questionsArrAtom } from "../../recoil/questionsRecoi";
import { useRecoilValue } from "recoil";
import Link from 'next/link';
import styles from './landing.module.css'

export default function Landing({ handlecount }) {
  // change naming
  const queAnsList = useRecoilValue(questionsArrAtom)
  // isShowingDilog ,setIsShowingDialog
  const [open, setOpen] = useState(false);
  // 
  const handleClickOpen = () => {
    setOpen(!open);
  };

  function handleClickViewQA(){
    if(!queAnsList.length){
      alert("First Add QA to view this page")
      return
    }
  }



  return (
    <div className={styles.containerDiv}>
      <div className={styles.componentsContainer}>

      
      
      <BasicButtons
        btText='add questions'
        onClick={handleClickOpen}
      />
      <FormDialog
        open={open}
        onClickClose={handleClickOpen}
      />
      <h3>Number of Questions { queAnsList.length}</h3>
      <Link href="/qes-and-ans">
        
          <BasicButtons onClick={handleClickViewQA}
            btText='view all questions'
          />

        

      </Link>
      </div>       
    </div>
  )
}