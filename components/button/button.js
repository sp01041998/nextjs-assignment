
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export default function BasicButtons({onClick, btText, DeleteIcon}) {
    return (
      <div className='container'>
        
        <Button variant="contained" size="large" startIcon={DeleteIcon}  onClick={onClick}  >{btText}</Button>
        
        
        </div>
    );
}