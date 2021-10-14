import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import {
  withStreamlitConnection,
  StreamlitComponentBase,
  Streamlit,
} from "streamlit-component-lib"

// const labels: { [index: string]: string } = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

// export default function HoverRating() {

interface State {
 rating: number,
 ratingText: string,
//  value: number,
 hover: number,
}

class HoverRating extends StreamlitComponentBase<State> {
  public state = {rating: 0,ratingText:"",hover:0}

  public render = (): React.ReactNode => {




    // Streamlit sends us a theme object via props that we can use to ensure
    // that our component has visuals that match the active theme in a
    // streamlit app.
    const { theme } = this.props
    const style: React.CSSProperties = {}

    const text = this.props.args["text"] as string
    const fontFamily = this.props.args["fontFamily"] as string
    const fontSize = this.props.args["fontSize"] as string
    const padding = this.props.args["padding"] as string
    const precision = this.props.args["precision"] as number
    const labels = this.props.args["labels"]
//     console.log(labels) //-- track this in chrome inspect

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start',width:'100%',margin:'0px',}}>
          <p
          style={{
          fontSize:fontSize,
          fontWeight:320,
          marginBottom:'0px',
          fontFamily:fontFamily,
          padding:padding,}}>
          {text}
          </p>

    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={this.state.rating}
        precision={precision}
        onChange={(event, newValue) => {
         newValue && this.handleOnChange(newValue);
        }}
        onChangeActive={(event, newHover) => {
         newHover && this.handleOnChangeActive(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {this.state.rating !== null && (
        <Box sx={{ ml: 2 }}>{labels[this.state.hover !== -1 ? this.state.hover : this.state.rating]}</Box>
      )}
    </Box>
  </div>
  );
}

private handleOnChange = (newValue:number): void => {

    this.setState(
      prevState => ({ rating: newValue}),
    );

    Streamlit.setComponentValue(newValue) ;}

private handleOnChangeActive = (newHover:number): void => {
      this.setState(
      prevState => ({ hover: newHover}),
    );
  }
}


export default withStreamlitConnection(HoverRating)
