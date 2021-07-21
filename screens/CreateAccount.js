import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";
import styled from "styled-components/native";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

export default function CreateAccount() {
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailNameRef = useRef();
  const passwordNameRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onDone = () => {
    alert("done!");
  };
  return (
    <AuthLayout>
      <KeyboardAvoidingView
        style={{
          width: "100%",
        }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
      >
        <TextInput
          placeholder="First Name"
          placeholderTextColor="gray"
          returnKeyType="next"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={() => onNext(lastNameRef)}
        />
        <TextInput
          ref={lastNameRef}
          placeholder="Last Name"
          placeholderTextColor="gray"
          returnKeyType="next"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={() => onNext(userNameRef)}
        />
        <TextInput
          ref={userNameRef}
          placeholder="Username"
          placeholderTextColor="gray"
          returnKeyType="next"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={() => onNext(emailNameRef)}
        />
        <TextInput
          ref={emailNameRef}
          placeholder="Email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          returnKeyType="next"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={() => onNext(passwordNameRef)}
        />
        <TextInput
          ref={passwordNameRef}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
          returnKeyType="done"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={onDone}
        />
        <AuthButton
          text="Create Account"
          disabled={true}
          onPress={() => null}
        />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}
