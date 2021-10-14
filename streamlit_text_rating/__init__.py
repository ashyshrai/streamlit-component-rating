import os
import streamlit.components.v1 as components
import streamlit as st

_RELEASE = True

if not _RELEASE:
    _streamlit_text_rating = components.declare_component(
        "streamlit_text_rating", url="http://localhost:3001")
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _streamlit_text_rating = components.declare_component(
        "streamlit_text_rating", path=build_dir)


def CustomHoverRating(text, precision, labels,key=None, fontFamily='sans-serif', fontSize='18px',padding='12px'):
    r = _streamlit_text_rating(text=text, precision=precision, labels=labels,key=key,
                    fontFamily=fontFamily, fontSize=fontSize,padding=padding)
    return r

# rating = CustomHoverRating(text='He is good',
#                          precision=1,
#                          labels={1: 'V Poor', 2: 'Poor',
#                                  3: 'Average', 4: 'Good', 5: 'Excellent'},
#                      key='abc'
#                          )
#
# st.write(rating)
