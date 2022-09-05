import React from 'react'
import { questionsArrAtom } from "../../recoil/questionsRecoi";
import { useRecoilValue } from "recoil";
import styles from './listQA.module.css';
import QueInfo from '../que-info-card/que-info-card';





export default function ListOfQue() {
    const listOfQA = useRecoilValue(questionsArrAtom)

    

   


    return (

        <div className={styles.mainContainer}>
            {listOfQA.map((queDetail, index) => (
                <QueInfo  qa={queDetail}  index={index}/>
            ))}
        </div>
    )


}
