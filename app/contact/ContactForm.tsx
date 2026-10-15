'use client';

export const dynamic = 'force-dynamic';

import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useActionState, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { sendMessageServerAction } from '../actions/sendMailServerAction';

const labelWithRequiredStar = ({ label }: { label: string }) => {
  return (
    <Label htmlFor={label.toLowerCase()}>
      <span className="flex">
        <span>{label}</span>
        <span className="text-red-500">*</span>
      </span>
    </Label>
  );
};

const ContactForm = () => {
  const [state, action, isPending] = useActionState(
    sendMessageServerAction,
    null
  );
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
    turnstileToken: '',
  });

  const resetTurnstile = () => {
    setFormData((current) => ({
      ...current,
      turnstileToken: '',
    }));

    if (turnstileWidgetIdRef.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  };

  const renderTurnstile = () => {
    if (
      !turnstileSiteKey ||
      !turnstileContainerRef.current ||
      !window.turnstile ||
      turnstileWidgetIdRef.current
    ) {
      return;
    }

    turnstileWidgetIdRef.current = window.turnstile.render(
      turnstileContainerRef.current,
      {
        sitekey: turnstileSiteKey,
        theme: 'auto',
        callback: (token: string) => {
          setFormData((current) => ({
            ...current,
            turnstileToken: token,
          }));
        },
        'expired-callback': () => {
          setFormData((current) => ({
            ...current,
            turnstileToken: '',
          }));
        },
        'error-callback': () => {
          setFormData((current) => ({
            ...current,
            turnstileToken: '',
          }));
        },
      }
    );
  };

  useEffect(() => {
    if (state?.success) {
      toast.success(state.success);
      setFormData({
        fullname: '',
        email: '',
        message: '',
        turnstileToken: '',
      });
      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetIdRef.current);
      }
    }
  }, [state?.success]);

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.error]);

  return (
    <form action={action} className="space-y-6">
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderTurnstile}
      />

      <div className="space-y-4">
        {labelWithRequiredStar({ label: 'Name' })}
        <div className="space-y-1">
          <Input
            type="text"
            // required
            id="name"
            placeholder="Your name, your fame"
            className="px-2 py-6"
            name="fullname"
            value={formData.fullname}
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
          />
          {state?.fullnameError && (
            <span className="text-sm text-red-500">{state.fullnameError}</span>
          )}
        </div>
      </div>
      <div className="space-y-4">
        {labelWithRequiredStar({ label: 'Email' })}
        <div className="flex flex-col space-y-1">
          <Input
            type="text" // yes text
            // required
            id="email"
            placeholder="Where can I reach you back?"
            className="px-2 py-6"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <span className="text-sm text-muted-foreground">
            Temporary emails are also accepted, unless you wish to hear back 😉
          </span>
          {state?.emailError && (
            <span className="text-sm text-red-500">{state.emailError}</span>
          )}
        </div>
      </div>
      <div className="space-y-4">
        {labelWithRequiredStar({ label: 'Message' })}
        <div className="space-y-1">
          <Textarea
            // required
            id="message"
            placeholder="Your words, my inbox."
            className="px-2 py-4"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          {state?.messageError && (
            <span className="text-sm text-red-500">{state.messageError}</span>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div className={turnstileSiteKey ? 'space-y-2' : 'hidden'}>
          <Label className="text-base font-bold text-foreground/70">
            Verification
          </Label>
          <div ref={turnstileContainerRef} className="min-h-16.25" />
          {state?.captchaError && (
            <span className="text-sm text-red-500">{state.captchaError}</span>
          )}
        </div>

        <Input
          type="hidden"
          name="turnstileToken"
          value={formData.turnstileToken}
        />
      </div>

      <div className="space-y-4">
        <Button
          type="submit"
          className="w-full px-8 py-6 cursor-pointer"
          size="lg"
          variant="default"
          disabled={isPending || (!!turnstileSiteKey && !formData.turnstileToken)}
        >
          {isPending ? 'Transporting your message to my inbox... 📨' : 'Submit'}
        </Button>

        <Button
          type="reset"
          className="w-full px-8 py-6 cursor-pointer"
          size="lg"
          variant="outline"
          onClick={resetTurnstile}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};
export default ContactForm;
