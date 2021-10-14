from streamlit_text_rating import CustomHoverRating
import streamlit as st

rating1 = CustomHoverRating(text='He is good',
                         precision=1,
                         labels={1: 'V Poor', 2: 'Poor',
                                 3: 'Average', 4: 'Good', 5: 'Excellent'},
                          key='abcssxcd',
                         )

rating2 = CustomHoverRating(text='thats awesome',
                         precision=1,
                         labels={1: 'V Poor', 2: 'Poor',
                                 3: 'Average', 4: 'Good', 5: 'Excellent'},
                          key='abcssxcdsad',
                            fontSize='18px',
                         )
if rating1:
    st.write(rating1)
if rating2:
    st.write(rating2)