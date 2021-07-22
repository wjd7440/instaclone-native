import React, { useRef } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
  const { register, handleSubmit, setValue } = useForm();

  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailNameRef = useRef();
  const passwordNameRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register("firstName", {
      required: true,
    });
    register("lastName", {
      required: true,
    });
    register("username", {
      required: true,
    });
    register("email", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        placeholder="First Name"
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        placeholderTextColor={"rgba(255,255,255,0.8)"}
        onChangeText={(text) => setValue("firstName", text)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        returnKeyType="next"
        onSubmitEditing={() => onNext(userNameRef)}
        placeholderTextColor={"rgba(255,255,255,0.8)"}
        onChangeText={(text) => setValue("lastName", text)}
      />
      <TextInput
        ref={userNameRef}
        placeholder="Username"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailNameRef)}
        placeholderTextColor={"rgba(255,255,255,0.8)"}
        onChangeText={(text) => setValue("username", text)}
      />
      <TextInput
        ref={emailNameRef}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordNameRef)}
        placeholderTextColor={"rgba(255,255,255,0.8)"}
        onChangeText={(text) => setValue("email", text)}
      />
      <TextInput
        ref={passwordNameRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        placeholderTextColor={"rgba(255,255,255,0.8)"}
        onChangeText={(text) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton
        text="Create Account"
        disabled={false}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
