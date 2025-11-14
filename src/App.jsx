import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Confetti from "react-confetti";
import { userSchema } from "./validations/userschema";
import "./App.css";
function App() {
  const [isSubmitted,setIsSubmitted] =useState(false);

  const{
    register,
    handleSubmit,
    formState: {errors},
  }= useForm({
    resolver:zodResolver(userSchema),
  });
  const onSubmit=() => {
    setIsSubmitted(true);
  };
  return (
    <div className="container">
      <div className="left-section">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time.
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable.
        </p>
      </div>

      <div className="right-section">
        {isSubmitted && <Confetti />}
        {!isSubmitted ? (
          <div className="wrapper">

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-box">
                <input {...register("firstName")}type="text"placeholder="First Name" />
                {errors.firstName && <p className="error">{errors.firstName.message}</p>}
              </div>
              <div className="input-box">
                <input {...register("lastName")} type="text"placeholder="Last Name" />
                {errors.lastName && <p className="error">{errors.lastName.message}</p>}
              </div>
              <div className="input-box">
                <input {...register("email")} type="text" placeholder="Email Address"/>
                {errors.email && <p className="error">{errors.email.message}</p>}
              </div>
              <div className="input-box">
                <input {...register("password")}type="password" placeholder="Password" />
                {errors.password && <p className="error">{errors.password.message}</p>}
              </div>

              <button className="submit-btn">CLAIM YOUR FREE TRIAL</button>
            </form>
          </div>
        ) : (
          <div className="success-wrapper">
            <h1 className="success-text">thank You!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
