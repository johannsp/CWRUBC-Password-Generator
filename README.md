# CWRUBC-Password-Generator
Generate a randomized password based on user criteria

Link:
https://johannsp.github.io/CWRUBC-Password-Generator/

Preview:
[![Generate-Password-website-preview.png](https://i.postimg.cc/LsYqQBnj/Generate-Password-website-preview.png)](https://postimg.cc/Nytf5X80)

On each click of "Generate Password" button Javascript function will be called
to compute an acceptable password.

All generated passwords contain lower case letters, but the user can choose
which other special characters may be present.

User critera for an acceptable password include
- Specify minimum password length between 8 and 128
- User controls which special characters beyond lower case can be included:
  - Whether password can include upper case letters
  - Whether password can include digits
  - Whether password can include punctuation type special characters
- Punctuation special characters include:
['~', '!', '#', '$', '%', '^', '\*', '-', '+', '.', ',', ':', ';'],
