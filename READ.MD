# Instaclone-native Setting

1. npm install --global expo-cli

   - expo 설치

2. expo init project_name

   - expo project 생성

3. expo install expo-app-loading, expo install expo-font

4. expo install expo-asset

5. yarn add @react-navigation/native

6. expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

7. yarn add @react-navigation/stack

8. npm i styled-components

9. expo install react-native-appearance

   - 다크모드, 화이트모드 설정 관련

# Welcome / Login / Create New Account

1. 자주쓰는 component들은 components 폴더로 분리

2. CreateAccount.js : 회원가입 시 useRef 사용해서 다음 버튼 눌렀을때 원하는 Input 으로 Focus

3. CreateAccount.js : KeyboardAvoidingView, Platform 을 사용해서 OS 별 Keyboard 와 Input 박스 조절

4. AuthLayout.js : TouchableWithoutFeedback, Keyboard 을 사용해서 Input 박스가 아닌 다른곳을 터치했을때 키보드 사라지도록 함

   - TouchableWithoutFeedback 은 TouchableOpacity 같은 기능인데 클릭하는 애니메이션이 보이지 않음

   - Keyboard 는 말 그대로 Keyboard 제어 관련 함수들이 있음

5. AuthShared.js : 자주쓰는 Input 박스를 따로 빼놓음

6. AuthLayout.js 속에 KeyboardAvoidingView 를 넣음

7. npm install react-hook-form

   - register, handleSubmit, setValue 를 사용하여 데이터 전송

   - useEffect 에 register 을 등록해서 Input 박스 유효성 검사

   - test, test(), () => test() 의 차이 구분하기

8. npm install @apollo/client graphql

   - apollo.js : client 만들기

   - @apollo/client 의 makeVar() 와 useReactiveVar() 를 사용하여 로그인 상태 관리

9. npm install @react-navigation/bottom-tabs
