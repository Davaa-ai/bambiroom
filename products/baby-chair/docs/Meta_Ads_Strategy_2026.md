# 2026 Meta Ads Execution Plan: 3-in-1 Baby Chair

This file is the **media buyer execution guide**. `Campaign_Strategy.md` explains the market angle; this file explains how to structure the Meta account, what to optimize for, and how to scale without confusing the algorithm.

---

## 1. Strategic thesis

This product should not be run with a bloated multi-stage setup on day one. The offer is simple, visual, and emotionally understandable, so the winning system is:

* broad enough for Meta to find buyers
* structured enough to learn fast
* disciplined enough to avoid fake signals

The product page is currently a **lead / order form page**, not a classic cart checkout. That changes the optimization strategy in an important way:

* do **not** center the account around `AddToCart`
* do optimize around the events the page actually fires

Current high-intent events that appear to be actively used in the page flow:

* `begin_checkout`
* `copy_bank`
* `lead_submit`

The tracking schema also defines `view_content`, `add_payment_info`, and `contact`, but those should not be treated as dependable optimization signals until they are confirmed to fire in the live flow.

This matters because early-stage accounts often do not generate enough `lead_submit` volume for stable Meta learning.

---

## 2. Recommended account structure

### Campaign 1: Creative Testing
**Type:** ABO  
**Budget share:** 20-30%

Purpose:

* test hooks
* test angles
* test ad formats

Rules:

* keep targeting broad
* change one major variable at a time
* use lightweight budgets so losers are cheap

Best variables to test first:

* hair-wash pain angle
* 3-in-1 value angle
* small-space angle
* mom review angle

### Campaign 2: Main Sales Campaign
**Type:** Sales campaign or Advantage+ Shopping Campaign if account signal quality supports it  
**Budget share:** 55-70%

Purpose:

* scale proven creative
* let Meta find the best pockets inside a broad audience

Recommended setup:

* women, 24-38
* Mongolia, with budget priority on Ulaanbaatar
* keep detailed targeting minimal unless performance clearly improves with constraints

### Campaign 3: Retargeting
**Type:** Sales / Leads retargeting  
**Budget share:** 10-15%

Audience ideas:

* 30-day product page visitors
* people who triggered `begin_checkout`
* people who triggered `add_payment_info`
* engagers from FB/IG page content

Creative focus:

* social proof
* spec clarity
* price + delivery
* one strong objection answer per ad

---

## 3. Conversion objective strategy

### Stage 1: Low-data phase
If the account is new or low-volume:

* optimize for `begin_checkout`

Why:

* the event will happen more often than `lead_submit`
* Meta can learn faster
* it is still a strong enough signal of product intent

### Stage 2: Mid-data phase
When `lead_submit` starts happening consistently:

* test `lead_submit` optimization in the main sales campaign

Suggested threshold:

* at least 20-30 `lead_submit` events in a rolling week before trusting it as the primary optimization event

### Stage 3: Mature phase
Once lead volume is stable and close rate is understood:

* keep prospecting on the event that gives the best cost-quality balance
* measure real outcome through lead quality, not Meta vanity alone

Strong reasoning:

If the algorithm is starved of conversion data, it will spend badly. Optimizing too early for the deepest event often feels "advanced" but performs worse in small accounts.

---

## 4. Audience strategy

### Primary audience
* women
* age 24-38
* Mongolia
* priority geography: Ulaanbaatar

This is broad on purpose. The creative should do the filtering.

### Secondary audience tests
Run these only as tests, not the main structure:

* gift buyers
* new parents
* parents of toddlers
* page engagers

Reason:

The product is easier to filter through creative than through interest stacking. Over-building the audience too early usually makes CPM and delivery worse.

---

## 5. Creative testing protocol

### Phase 1: Hook testing
Test 3-5 hooks with the same core body footage.

Examples:

* "Үс угаах болгонд хүүхэд уйлдаг уу?"
* "Нэг сандал. Гурван хэрэглээ."
* "Жижиг зайтай айлд яг хэрэгтэй хүүхдийн туслах."

Watch:

* thumb-stop / hook rate
* outbound CTR
* landing page view quality

Kill quickly if:

* hook rate is clearly weaker than the batch
* CTR is poor
* comments show confusion about what the product is

### Phase 2: Angle testing
Take the best hook and test different bodies:

* hair washing
* feeding cleanup
* 3-in-1 transformation
* mom testimonial

Watch:

* CTR
* cost per `begin_checkout`
* quality of comments and DMs

### Phase 3: Offer / close testing
Once a creative angle works, test close mechanics:

* free shipping line
* price framing
* review-led close
* spec-led close

At this phase, the job is not to find a prettier ad. The job is to remove hesitation.

---

## 6. ManyChat / Auto-DM guidance

ManyChat can work well here, but it should be treated as an **optional amplifier**, not the core dependency.

### Use it when
* comment volume already exists
* you can monitor DMs
* the keyword flow is fully in Mongolian

### Suggested keyword
**"САНДАЛ"**

This is better than `"CHAIR"` because:

* it matches the language of the ads
* it lowers friction
* it feels native to the audience

### Recommended flow
1. User comments `САНДАЛ`
2. Auto-reply confirms the link was sent
3. DM sends product page link + one clear reason to click
4. Optional follow-up answers one FAQ, not a hard sell

### Do not do this
* promise extra discounts you cannot sustain
* add DM automation before the basic landing page funnel is proven
* split too much budget away from direct click-to-page campaigns

Reason:

Comment automation is powerful for engagement, but if the product page and lead flow are not stable first, it adds complexity without fixing the actual bottleneck.

---

## 7. Budget model

### Percentage model
* Creative Testing: 20-30%
* Main Sales: 55-70%
* Retargeting: 10-15%

### Example with 60,000 MNT/day
* Testing: 15,000 MNT/day
* Main Sales: 36,000 MNT/day
* Retargeting: 9,000 MNT/day

This structure is better than spreading tiny budgets across many ad sets because:

* each campaign gets enough spend to learn
* winners become obvious faster
* management stays simple

---

## 8. Scale and kill rules

### Kill or pause when
* CTR is weak versus the rest of the batch
* comments show the product is not understood
* cost per `begin_checkout` is far above the account average
* the creative gets clicks but no downstream intent

### Scale when
* CTR is healthy
* cost per `begin_checkout` is stable
* `lead_submit` volume follows, not just empty clicks

### Safe scaling rule
Increase budget gradually, around 15-20% at a time, then wait before making the next jump.

Reason:

Large jumps reset delivery behavior and can turn a winner into an unstable campaign.

---

## 9. Weekly review checklist

Every week answer these questions:

1. Which hook stopped the scroll fastest?
2. Which angle produced the cheapest `begin_checkout`?
3. Which creative produced the best quality leads?
4. Which comments showed the biggest objections?
5. Is the landing page helping or hurting the ad signal?

If the ads are getting attention but not leads, the problem is often not targeting. It is usually:

* weak angle-message fit
* landing page hesitation
* unclear offer
* slow operational follow-up

---

## 10. Final guidance

This account should be run with one discipline above all:

**optimize for signal quality, not just vanity performance.**

For this product, the best order of operations is:

1. find the winning angle
2. optimize around the right event depth
3. scale the winner slowly
4. retarget with proof, not noise

That sequence gives the account enough clarity to grow without becoming messy.
