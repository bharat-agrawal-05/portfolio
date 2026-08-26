import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-b from-slate-100/90 to-white dark:from-slate-900/90 dark:to-slate-950 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Let's build something impactful together.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Open to deep learning research collaborations, high-performance systems engineering, and full-time software engineering roles. Feel free to reach out directly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            {/* Direct Email Action */}
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 rounded-xl transition-all shadow-xs hover:scale-[1.02] active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Send an Email</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-mono text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span className="text-xs sm:text-sm">{resumeData.contact.email}</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-sky-500" />
              {resumeData.contact.phone}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-500" />
              {resumeData.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
