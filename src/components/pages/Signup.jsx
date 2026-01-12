import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { signUpUser, loginUser, verifyEmail } from "../../api/authApi";
import toast, { Toaster } from "react-hot-toast";

const inputBase =
  "w-full px-5 py-4 rounded-xl bg-gray-800 border border-orange-800/50 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition";

const buttonPrimary =
  "w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-lg shadow-lg hover:shadow-orange-500/40 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed";

export default function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signup"); // "signup" | "login" | "verify"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    referralCode: "",
    twoFactorCode: "",
  });

  const CODE_LENGTH = 6;
  const [verifyCode, setVerifyCode] = useState(Array(CODE_LENGTH).fill(""));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signUpUser(
        form.email,
        form.username,
        form.password,
        form.fullName,
        form.phone,
        form.country,
        form.referralCode || undefined
      );
      setMode("verify");
      toast.success("Verification code sent to your email!");
    } catch (err) {
      const msg = err.response?.data?.message || "Signup failed. Please try again.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await loginUser(
        form.email,
        form.password,
        form.twoFactorCode || undefined
      );
      localStorage.setItem("auth_token", res.token || res.accessToken);
      localStorage.setItem("user", JSON.stringify(res.user || {}));
      toast.success("Welcome back!");
      navigate("/home", { replace: true });
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed. Check credentials.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    const code = verifyCode.join("").trim();

    if (code.length !== CODE_LENGTH) {
      toast.error(`Please enter the full ${CODE_LENGTH}-digit code`);
      return;
    }

    setLoading(true);
    setError("");

    try {
      await verifyEmail(form.email, code);
      toast.success("Email verified! Redirecting...");
      navigate("/home", { replace: true });
    } catch (err) {
      const msg = err.response?.data?.message || "Verification failed. Please try again.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleCodeChange = (index, value) => {
    const sanitized = value.replace(/\D/g, "").slice(0, 1);
    const newCode = [...verifyCode];
    newCode[index] = sanitized;
    setVerifyCode(newCode);

    if (sanitized && index < CODE_LENGTH - 1) {
      document.getElementById(`code-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!verifyCode[index] && index > 0) {
        document.getElementById(`code-${index - 1}`)?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      document.getElementById(`code-${index - 1}`)?.focus();
    } else if (e.key === "ArrowRight" && index < CODE_LENGTH - 1) {
      document.getElementById(`code-${index + 1}`)?.focus();
    }
  };

  const handlePaste = (e, index) => {
    e.preventDefault();
    const pasted = (e.clipboardData || window.clipboardData)
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, CODE_LENGTH - index);

    if (!pasted) return;

    const newCode = [...verifyCode];
    for (let i = 0; i < pasted.length && index + i < CODE_LENGTH; i++) {
      newCode[index + i] = pasted[i];
    }
    setVerifyCode(newCode);

    const nextFocus = Math.min(index + pasted.length, CODE_LENGTH - 1);
    document.getElementById(`code-${nextFocus}`)?.focus();

    // Auto-submit if complete
    if (newCode.join("").length === CODE_LENGTH) {
      setTimeout(handleVerify, 400);
    }
  };

  // Optional: auto-submit when all digits are filled
  useEffect(() => {
    if (verifyCode.join("").length === CODE_LENGTH && !loading) {
      handleVerify();
    }
  }, [verifyCode, loading]);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4 relative overflow-hidden">
      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />

      {/* Robotic Animated Motion Background */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, orange 1px, transparent 1px), " +
              "radial-gradient(circle at 90% 80%, orange 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating orange robotic glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 bg-orange-600/18 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-2xl bg-gray-900/75 backdrop-blur-xl border border-orange-900/50 rounded-3xl p-8 md:p-10 shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="sm:text-5xl text-xl font-black text-orange-400 mb-2">
            CREDENCEFLUX
          </h1>
          <p className="text-gray-400">Secure Crypto Investment Platform</p>
        </div>

        {/* Mode Toggle (Signup / Login) */}
        {mode !== "verify" && (
          <div className="flex mb-8 rounded-xl overflow-hidden bg-gray-800/60 border border-orange-800/50">
            {["signup", "login"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-4 text-lg font-semibold transition ${
                  mode === m
                    ? "bg-orange-600 text-white"
                    : "text-orange-300 hover:text-orange-200"
                }`}
              >
                {m === "signup" ? "Create Account" : "Sign In"}
              </button>
            ))}
          </div>
        )}

        {/* Signup Form */}
        {mode === "signup" && (
          <form onSubmit={handleSignup} className="grid md:grid-cols-2 gap-5">
            <input
              className={inputBase}
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
            <input
              className={inputBase}
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              className={`${inputBase} md:col-span-2`}
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
            <input
              className={`${inputBase} md:col-span-2`}
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              className={inputBase}
              name="phone"
              placeholder="Phone Number (optional)"
              onChange={handleChange}
            />
            <input
              className={inputBase}
              name="country"
              placeholder="Country"
              onChange={handleChange}
              required
            />
            <input
              className={`${inputBase} md:col-span-2`}
              name="referralCode"
              placeholder="Referral Code (optional)"
              onChange={handleChange}
            />
            <button
              type="submit"
              className={`${buttonPrimary} md:col-span-2`}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Join Now"}
            </button>
          </form>
        )}

        {/* Login Form */}
        {mode === "login" && (
          <form onSubmit={handleLogin} className="space-y-5">
            <input
              className={inputBase}
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
            <input
              className={inputBase}
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              className={inputBase}
              name="twoFactorCode"
              placeholder="2FA Code (if enabled)"
              onChange={handleChange}
            />
            <button
              type="submit"
              className={buttonPrimary}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In Securely"}
            </button>

            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-orange-400 hover:text-orange-300 text-sm underline"
              >
                Forgot password?
              </button>
            </div>
          </form>
        )}

        {/* Email Verification */}
        {mode === "verify" && (
          <div className="text-center">
            <p className="text-gray-300 mb-6 text-lg">
              Enter the {CODE_LENGTH}-digit code sent to{" "}
              <span className="text-orange-400 font-medium">{form.email}</span>
            </p>

            <div className="flex justify-center gap-3 mb-8">
              {verifyCode.map((digit, i) => (
                <input
                  key={i}
                  id={`code-${i}`}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  autoComplete="one-time-code"
                  onChange={(e) => handleCodeChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  onPaste={(e) => handlePaste(e, i)}
                  className="w-12 h-14 text-2xl text-center bg-gray-800 border border-orange-800/50 rounded-xl text-white focus:border-orange-500 outline-none transition"
                />
              ))}
            </div>

            <button
              onClick={handleVerify}
              className={buttonPrimary}
              disabled={loading || verifyCode.join("").length !== CODE_LENGTH}
            >
              {loading ? "Verifying..." : "Verify & Continue"}
            </button>

            <p className="text-gray-400 text-sm mt-6">
              Didn't receive the code?{" "}
              <button
                type="button"
                onClick={() => {
                  // TODO: Call your resend API endpoint here
                  toast.success("New code sent! Check your email.");
                }}
                className="text-orange-400 hover:text-orange-300 underline"
              >
                Resend
              </button>
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}