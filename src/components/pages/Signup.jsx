





import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { signUpUser, loginUser, verifyEmail } from "../../api/authApi";
import toast, { Toaster } from "react-hot-toast";

const inputBase =
  "w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 text-base focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition";

const buttonPrimary =
  "w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed";

export default function Signup() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signup");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  const [verifyCode, setVerifyCode] = useState(["", "", "", "", "", ""]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  /* ===================== ACTIONS ===================== */

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signUpUser({
        username: form.username,
        email: form.email,
        password: form.password,
        fullName: form.fullName,
        phone: form.phone,
        country: form.country,
        referralCode: form.referralCode || undefined,
      });
      setMode("verify");
      toast.success("Verification code sent!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser({
        email: form.email,
        password: form.password,
        twoFactorCode: form.twoFactorCode || undefined,
      });
      localStorage.setItem("auth_token", res.token || res.accessToken);
      localStorage.setItem("user", JSON.stringify(res.user));
      toast.success("Welcome back!");
      navigate("/home", { replace: true });
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    const code = verifyCode.join("");
    if (code.length !== 6) return toast.error("Enter full code");
    setLoading(true);
    try {
      await verifyEmail({ email: form.email, code });
      toast.success("Email verified!");
      navigate("/home", { replace: true });
    } catch (err) {
      toast.error(err.response?.data?.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  /* ===================== UI ===================== */

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 relative overflow-hidden">
      <Toaster position="top-center" />

      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/30 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            CREDENCEFLUX
          </h1>
          <p className="text-gray-400 mt-2">Secure Crypto Investment Platform</p>
        </div>

        {/* Toggle */}
        {mode !== "verify" && (
          <div className="flex mb-8 rounded-xl overflow-hidden bg-white/5 border border-white/10">
            {["signup", "login"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-4 text-lg font-semibold transition ${
                  mode === m
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {m === "signup" ? "Create Account" : "Sign In"}
              </button>
            ))}
          </div>
        )}

        {/* Forms */}
        {mode === "signup" && (
          <form onSubmit={handleSignup} className="grid md:grid-cols-2 gap-5">
            <input className={inputBase} name="username" placeholder="Username" onChange={handleChange} />
            <input className={inputBase} name="fullName" placeholder="Full name" onChange={handleChange} />
            <input className={`${inputBase} md:col-span-2`} name="email" type="email" placeholder="Email" onChange={handleChange} />
            <input className={`${inputBase} md:col-span-2`} name="password" type="password" placeholder="Password" onChange={handleChange} />
            <input className={inputBase} name="phone" placeholder="Phone number" onChange={handleChange} />
            <input className={inputBase} name="country" placeholder="Country" onChange={handleChange} />
            <input className={`${inputBase} md:col-span-2`} name="referralCode" placeholder="Referral code (optional)" onChange={handleChange} />
            <button className={`${buttonPrimary} md:col-span-2`} disabled={loading}>
              {loading ? "Creating account..." : "Join Now"}
            </button>
          </form>
        )}

        {mode === "login" && (
  <form onSubmit={handleLogin} className="space-y-5">
    <input
      className={inputBase}
      name="email"
      type="email"
      placeholder="Email"
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
      placeholder="2FA Code (optional)"
      onChange={handleChange}
    />

    <button className={buttonPrimary} disabled={loading}>
      {loading ? "Signing in..." : "Sign In Securely"}
    </button>

    {/* Forgot Password Link */}
    <div className="flex justify-end mt-2">
      <button
        type="button"
        onClick={() => navigate("/forgot-password")}
        className="text-cyan-400 hover:text-cyan-300 text-sm underline"
      >
        Forgot password?
      </button>
    </div>
  </form>
)}


        {mode === "verify" && (
          <div className="text-center">
            <p className="text-gray-300 mb-6">
              Enter the 6-digit code sent to <span className="text-cyan-400">{form.email}</span>
            </p>

            <div className="flex justify-center gap-3 mb-8">
              {verifyCode.map((d, i) => (
                <input
                  key={i}
                  maxLength={1}
                  value={d}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, "");
                    const c = [...verifyCode];
                    c[i] = v;
                    setVerifyCode(c);
                  }}
                  className="w-12 h-14 text-2xl text-center bg-white/10 border border-white/20 rounded-xl text-white focus:border-cyan-400 outline-none"
                />
              ))}
            </div>

            <button className={buttonPrimary} onClick={handleVerify} disabled={loading}>
              Verify & Continue
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
