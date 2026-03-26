import React, { useRef, useState, useEffect } from "react";
import { userSignUp } from "./userSignUp";
import { groupSignUp } from "./groupSignUp";
import { Button } from "./ui/button";
import Lottie from "lottie-react";
import animationData from "../public/animations/sucess.json";

function StepOne() {
  return <h3>First content</h3>;
}

interface StepTwoProps {
  next: () => void;
  finish: () => void;
  isActive?: boolean;
}

interface StepThreeProps {
  isActive: boolean;
}

function StepTwo({ next,finish, isActive }: StepTwoProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    const value = e.target.value;

    if (value.length > 1) {
      e.target.value = value.slice(-1);
    }

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number): void => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-full min-h-[400px] ">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Verify information</h2>
        <p className="text-base text-muted-foreground">Enter the 4-digit code sent to your email</p>
      </div>
      
      <div className="w-full max-w-sm space-y-6">
        <div className="flex justify-center gap-3">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              className="w-14 h-14 text-center text-lg font-semibold bg-background border-2 border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-200 hover:border-brand/50 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-pin-input-item
              autoFocus={index === 0}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <button className="w-full text-center text-brand font-semibold hover:text-brand/80 transition-colors duration-200 underline-offset-4 hover:underline">
          Send Again
        </button>
      </div>

      <Button className="w-full h-12 rounded-xl bg-brand-neural hover:bg-brand-neural/90 text-white font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]" variant="default" onClick={finish}>
        Continue
      </Button>
    </div>
  );
}
function StepThree({ isActive }: StepThreeProps) {
  const [countdown, setCountdown] = useState(5);
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (!isActive) {
      // Reset when not active
      setCountdown(5);
      setDots('');
      return;
    }

    let countdownInterval: NodeJS.Timeout;
    let dotsInterval: NodeJS.Timeout;

    if (countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      dotsInterval = setInterval(() => {
        setDots((prev) => {
          if (prev.length >= 3) return '';
          return prev + '.';
        });
      }, 500);
    }

    return () => {
      clearInterval(countdownInterval);
      clearInterval(dotsInterval);
    };
  }, [isActive, countdown]);

  return (
    <div className="flex flex-col items-center justify-between h-full min-h-[400px] w-full  mx-auto space-y-8">
      <div className="flex flex-col items-center space-y-6">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: 200, height: 200 }}
        />
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-foreground">
            Welcome to Nkirra!
          </h2>
          <p className="text-base text-muted-foreground">
            Your account has been successfully created
          </p>
          <p className="text-base text-muted-foreground">
            Redirecting your to the application in {countdown}s{dots}
          </p>
        </div>
      </div>

      {/* <Button className="w-full h-12 rounded-xl bg-brand hover:bg-brand/90 text-white font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]" variant="default">
        Login
      </Button> */}

      {/* <Button className="w-full h-12 rounded-xl bg-brand-neural hover:bg-brand-neural/90 text-white font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]" variant="default">
        Login
      </Button> */}
    </div>
  );
}


interface StepperProps {
  user:   'admin' | 'member' | null;
  setLogin: (login: boolean) => void;
  setUser: (user: 'admin' | 'member' | null) => void;
}

export default function Stepper({ user, setLogin, setUser }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(1);


  const steps = [
    { id: 1, label: "User Information", component: user !== 'admin' ? userSignUp : groupSignUp },
    { id: 2, label: "Verification", component: StepTwo },
    { id: 3, label: "Success", component: StepThree },
  ];

  const next = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
    
  };


  const finish = () => setCurrentStep(steps.length);

  const back = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const reset = () => setCurrentStep(1);

  return (
    <div className="w-full">
      {/* Nav */}
      <ul className="flex items-center w-full">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <React.Fragment key={step.id}>
              {/* Step bubble + label */}
              <li className="flex flex-col items-center shrink-0">
                <div
                  className={`size-8 flex items-center justify-center rounded-full text-sm font-semibold transition-all
                    ${isCompleted ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-700"}
                    ${isActive ? "ring-2 ring-blue-500 bg-blue-500 text-white scale-110" : ""}`}
                >
                  {isCompleted ? "✓" : step.id}
                </div>
                <span
                  className={`mt-1 text-sm font-medium transition-colors whitespace-nowrap
                    ${isActive ? "text-blue-600" : "text-gray-600"}`}
                >
                  {step.label}
                </span>
              </li>

              {/* Connector line — flex-1 so it fills all remaining space */}
              {index !== steps.length - 1 && (
                <li
                  key={`connector-${step.id}`}
                  className={`flex-1 h-px mx-2 mb-5 transition-colors
                    ${isCompleted ? "bg-teal-500" : "bg-gray-300"}`}
                />
              )}
            </React.Fragment>
          );
        })}
      </ul>

      {/* Content */}
      <div className="mt-6">
        {steps.map((step) => {
          const StepComponent = step.component;
          const isActive = currentStep === step.id;
          return (
            <div
              key={step.id}
              className={isActive ? "block  h-[440px]" : "hidden"}
            >
              {/* <div className="p-4 h-48 flex items-center justify-center border border-dashed rounded-xl"> */}
                <StepComponent 
                  next={next} 
                  finish={finish} 
                  setUser={setUser} 
                  setLogin={setLogin}
                  isActive={isActive}
                />
              {/* </div> */}
            </div>
          );
        })}

        {/* Final content removed - StepThree is now the final step */}

        {/* Buttons */}
        {/* <div className="mt-5 flex justify-between">
          <button
            onClick={back}
            disabled={currentStep === 1}
            className="px-3 py-2 border rounded disabled:opacity-50"
          >
            Back
          </button>
          {currentStep < steps.length ? (
            <button
              onClick={next}
              className="px-3 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={reset}
              className="px-3 py-2 bg-gray-500 text-white rounded"
            >
              Reset
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
}