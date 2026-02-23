'use client';

import { useCallback, useRef, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { submitHomeRequestForm } from '../api/submitHomeRequestForm';
import { createHomeRequestFormSchema,type HomeRequestFormSchema } from '../model/ContactForm.schema';
import { ContactFormSuccess } from './ContactFormSuccess';
import styles from './HomeRequestForm.module.scss';

const PROJECT_TYPE_OPTIONS = [
  'Business direction & clarity',
  'Offer refinement & positioning',
  'Growth planning & prioritisation',
  'Structural or operational setup',
  'Strategic review / second opinion',
  'Other',
];

const INVESTMENT_OPTIONS = [
  'Under €1,000',
  '€1,000 - €5,000',
  '€5,000 - €10,000',
  '€10,000 - €20,000',
  '€20,000+',
];

const TIMING_OPTIONS = [
  'Within the next month',
  '1–3 months',
  '3–6 months',
  'Flexible / not fixed yet',
];

const FOLLOW_UP_OPTIONS = ['Email', 'Phone', 'Video Call'];

export const HomeRequestForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<HomeRequestFormSchema>({
    resolver: zodResolver(createHomeRequestFormSchema()),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      website: '',
      projectType: '',
      projectTypeOther: '',
      investmentRange: '',
      goals: '',
      frictionPoints: '',
      clientContext: '',
      timing: '',
      followUp: '',
      attachments: [],
    },
  });

  const projectType = watch('projectType');

  const onSubmit = useCallback(
    async (data: HomeRequestFormSchema) => {
      try {
        setIsLoading(true);
        await submitHomeRequestForm({ ...data, attachments });
        setTimeout(() => {
          setIsSuccess(true);
          reset();
          setAttachments([]);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    },
    [reset, attachments]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachments(files);
  };

  return (
    <>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* ── Your details ─────────────────────────────── */}
          <div className={styles.section}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  {...register('fullName')}
                  className={errors.fullName ? styles.errorInput : ''}
                />
                {errors.fullName && <p className={styles.error}>{errors.fullName.message}</p>}
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  {...register('email')}
                  className={errors.email ? styles.errorInput : ''}
                />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register('phone')}
                  className={errors.phone ? styles.errorInput : ''}
                />
                {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
              </div>
              <div className={styles.field}>
                <label htmlFor="companyName">
                  Company name <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  id="companyName"
                  type="text"
                  placeholder="Enter your company name"
                  {...register('companyName')}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="website">
                Your website <span className={styles.optional}>(optional)</span>
              </label>
              <input
                id="website"
                type="url"
                placeholder="Enter your website URL"
                {...register('website')}
              />
            </div>
          </div>

          <div className={styles.divider} />

          {/* ── About your project ───────────────────────── */}
          <div className={styles.section}>
            <div className={styles.field}>
              <label htmlFor="projectType">What best describes what you&apos;re looking for?</label>
              <div className={styles.selectWrapper}>
                <select
                  id="projectType"
                  {...register('projectType')}
                  className={errors.projectType ? styles.errorInput : ''}
                  defaultValue=""
                >
                  <option value="" disabled>Please specify</option>
                  {PROJECT_TYPE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <span className={styles.selectArrow} />
              </div>
              {errors.projectType && <p className={styles.error}>{errors.projectType.message}</p>}
            </div>

            {projectType === 'Other' && (
              <div className={styles.field}>
                <label htmlFor="projectTypeOther">Please specify</label>
                <input
                  id="projectTypeOther"
                  type="text"
                  placeholder="Describe what you're looking for"
                  {...register('projectTypeOther')}
                />
              </div>
            )}

            <div className={styles.field}>
              <label htmlFor="investmentRange">
                Scope &amp; investment
                <span className={styles.sublabel}> — Indicative investment range:</span>
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="investmentRange"
                  {...register('investmentRange')}
                  className={errors.investmentRange ? styles.errorInput : ''}
                  defaultValue=""
                >
                  <option value="" disabled>Please specify</option>
                  {INVESTMENT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <span className={styles.selectArrow} />
              </div>
              {errors.investmentRange && <p className={styles.error}>{errors.investmentRange.message}</p>}
            </div>
          </div>

          <div className={styles.divider} />

          {/* ── Goals & friction points ───────────────────── */}
          <div className={styles.section}>
            <div className={styles.field}>
              <label htmlFor="goals">Goals &amp; friction points</label>
              <textarea
                id="goals"
                placeholder="What are you trying to move forward with right now?"
                rows={4}
                {...register('goals')}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="frictionPoints">
                Where does it currently feel unclear, stuck, or inefficient?
                <span className={styles.sublabel}> (optional but helpful)</span>
              </label>
              <textarea
                id="frictionPoints"
                placeholder="Optional but helpful"
                rows={4}
                {...register('frictionPoints')}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="clientContext">Who do you work with or serve?</label>
              <textarea
                id="clientContext"
                placeholder="Any detail that helps us understand your context"
                rows={4}
                {...register('clientContext')}
              />
            </div>
          </div>

          <div className={styles.divider} />

          {/* ── Timing ───────────────────────────────────── */}
          <div className={styles.section}>
            <div className={styles.field}>
              <label htmlFor="timing">Timing</label>
              <div className={styles.selectWrapper}>
                <select
                  id="timing"
                  {...register('timing')}
                  className={errors.timing ? styles.errorInput : ''}
                  defaultValue=""
                >
                  <option value="" disabled>When would you ideally like to start?</option>
                  {TIMING_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <span className={styles.selectArrow} />
              </div>
              {errors.timing && <p className={styles.error}>{errors.timing.message}</p>}
            </div>

            <div className={styles.field}>
              <label htmlFor="followUp">How should we follow up?</label>
              <div className={styles.selectWrapper}>
                <select
                  id="followUp"
                  {...register('followUp')}
                  className={errors.followUp ? styles.errorInput : ''}
                  defaultValue=""
                >
                  <option value="" disabled>Preferred way to continue the conversation</option>
                  {FOLLOW_UP_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <span className={styles.selectArrow} />
              </div>
              {errors.followUp && <p className={styles.error}>{errors.followUp.message}</p>}
            </div>
          </div>

          <div className={styles.divider} />

          {/* ── Attachments ───────────────────────────────── */}
          <div className={styles.section}>
            <div className={styles.field}>
              <label htmlFor="attachments">
                Attachments <span className={styles.optional}>(optional)</span>
              </label>
              <div
                className={styles.fileUpload}
                onClick={() => fileInputRef.current?.click()}
              >
                <span className={styles.fileUploadText}>
                  {attachments.length > 0
                    ? attachments.map((f) => f.name).join(', ')
                    : (
                      <>
                        Upload any materials that help explain your situation
                        <br />
                        (e.g., notes, outlines, links, drafts)
                      </>
                    )}
                </span>
                <svg className={styles.fileIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1992 11.45L10.7492 12.9C10.3692 13.28 10.3692 13.9 10.7492 14.28C11.1292 14.66 11.7492 14.66 12.1292 14.28L14.6492 11.76C15.7192 10.69 15.7192 8.95 14.6492 7.88L14.3692 7.6C13.2992 6.53 11.5592 6.53 10.4892 7.6L7.59922 10.49C5.92922 12.16 5.92922 14.87 7.59922 16.54L7.87922 16.82C9.54922 18.49 12.2592 18.49 13.9292 16.82L17.2492 13.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  ref={fileInputRef}
                  id="attachments"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>
              <p className={styles.fileNote}>Max size: 10MB</p>
            </div>
          </div>

          {/* ── Submit ───────────────────────────────────── */}
          <div className={styles.submitArea}>
            <p className={styles.submitNote}>
              Once submitted, we&apos;ll review your request and follow up with the next steps or clarifying questions.
            </p>
            <button type="submit" className={styles.submitBtn} disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Submit a request'}
            </button>
          </div>

        </form>
      </div>
      {isSuccess && <ContactFormSuccess onClose={() => setIsSuccess(false)} />}
    </>
  );
};
