import React from 'react';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
class FirstPanel extends React.Component{
        constructor(props){
            super(props);
        }



render(){
    return <div>
       
        <Button variant="contained"  >

        <AddBoxIcon color="primary"/>
        </Button>
     
        
        <Select />
        
    </div>

}
}

export default FirstPanel;