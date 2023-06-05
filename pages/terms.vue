<script setup lang="ts">
const terms = `
## Acceptance of the Terms of Service
These terms of service are entered into by and between You and Impulse Alarm LLC. In consideration for favorable and/or discounted pricing (relative to ADT minimum advertising pricing) and enhanced customer service offered to you by Impulse Alarm LLC and its Contractors, the following terms and conditions (“Terms of Service”) govern your access to and use of Impulse Alarm’s order management website (dash.impulsealarm.com, my.impulsealarm.com) (“The Website”) and your relationship with Impulse Alarm LLC, which is facilitating your access to home security monitoring services, equipment, and installation labor (“The Services”).
Please read the Terms of Service carefully before you start to use The Website. By clicking to accept or agree to the Terms of Service when this option is made available to you, you accept and agree to be bound and abide by these Terms of Service.
## Period of Rescission
In the event that you cancel your contract within the recission period, you must pay a $250 restocking fee to Impulse Alarm to cover the cost of installing and removing the alarm equipment.
## Early Termination Fee
If you terminate your monitoring agreement for any reason not covered by the 6 Month ADT Money Back Guarantee, as outlined in ADT’s terms and conditions, and within fourteen months of the initial contract date then, in addition to any outstanding fees owed at termination, you shall pay Impulse Alarm an Early Termination Fee of $1,000. This Early Termination fee shall apply whether the account is cancelled by you (the Customer) within fourteen months of the initial contract date, as well as in the event that the account is cancelled by ADT due to non-payment within fourteen months of the initial contract date.
## 6-Month ADT Money-Back Guarantee
Money back service guarantee only applies after ADT has made attempts to resolve a system-related issue and has not been able to resolve that issue within the first 6 months of your contract. Equipment must be fully removed before a refund will be processed. Conditions preventing normal system operation cannot be caused by the customer.
## ADT Theft Protection Guarantee
The Customer presenting ADT with this ORIGINAL CERTIFICATE will be eligible to receive a reimbursement of up to five hundred dollars ($500) of Customer’s homeowner’s insurance deductible (if any) if, and only if, ALL of the following requirements are met to ADT’s reasonable satisfaction: (i) the property loss was the result of a burglary that took place while the security system installed at Customer’s protected premises was in good working order and was “on,” and while all of Customer’s doors and windows were locked; and (ii) the intruder entered the residence through a door, window or other area equipped with an ADT detection device, and such detection device was not “bypassed”; and (iii) Customer is not in any way in default under the ADT Residential Systems Customer’s Order; and (iv) Customer files a written claim with their homeowner’s insurance company, and such claim is not rejected or otherwise contested by the insurer; and (v) Customer reports the burglary loss to the appropriate police department and obtains a written police report; and (vi) Customer provides ADT with copies of the insurance claim report, the police report within sixty (60) days of the property loss and proof of settlement by insurance carrier; and (vii) Customer certifies in writing to ADT (by signing this ORIGINAL CERTIFICATE and presenting it to ADT within sixty [60] days of the property loss) that all of the foregoing requirements have been satisfied. Customer understands that presentation of this ORIGINAL CERTIFICATE signed by Customer is required and understands that ADT reserves the right to reject any application for reimbursement that does not comply with ALL of the requirements. Photocopies or other reproductions of this Certificate will NOT be accepted. By signing below, Customer certifies to ADT that all of the foregoing requirements have been satisfied. Please mail to: ADT Security Services, Customer Care Team, 3190 S. Vaughn Way, Aurora, CO 80014.
## Monitoring
\*$99.00 Customer Installation Charge. 36-Month Monitoring Agreement required at $59.99 per month ($2,159.64). 24-Month Monitoring Agreement required at $59.99 per month ($1,439.76) for California. Early termination fee applies. Form of payment must be by credit card or electronic charge to your checking or savings account. Offer applies to homeowners only. Local permit fees may be required. Satisfactory credit history required. Certain restrictions may apply. Offer valid for new ADT Authorized Dealer customers only and not on purchases from ADT LLC. Other rate plans available. Cannot be combined with any other offer. Photos are for illustrative purposes only and may not reflect the exact product/service actually provided.
## ADT Command + Control
ADT Command Interactive Services, which help you manage your home environment and family lifestyle, requires the purchase and/ or activation of an ADT alarm system with monitored burglary service and a compatible computer, cell phone or PDA with Internet and email access. These ADT Command Interactive Solutions Services do not cover the operation or maintenance of any household equipment/systems that are connected to the ADT Command Interactive Solutions Services/Equipment. All ADT Command Interactive Solutions Services are not available with the various levels of ADT Command Interactive Solutions Services. All ADT Command Interactive Solutions Services may not be available in all geographic areas. Standard message and data rates may apply to text alerts. You may be required to pay additional charges to purchase equipment required to utilize the ADT Pulse Interactive Solutions Services features you desire. Two-way encryption only available with compatible SIX devices.
## Disclaimer of Warranties
YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN “AS IS'' AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE WEBSITE, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
TO THE FULLEST EXTENT PROVIDED BY LAW, THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, AND FITNESS FOR PARTICULAR PURPOSE.
NEITHER IMPULSE ALARM LLC NOR ANY OF ITS OFFICERS, AGENTS OR CONTRACTORS SHALL BE LIABLE TO YOU UNDER THESE TERMS OF SERVICE ON ACCOUNT OF YOUR USE OF THE WEBSITE OR THE SERVICES. THIS LIMITATION OF LIABILITY APPLIES TO BAR RECOVERY OF ANY DIRECT, CONSEQUENTIAL, SPECIAL AND EXEMPLARY OR PUNITIVE DAMAGES, WHETHER A CLAIM IS BASED ON CONTRACT, TORT OR OTHER LEGAL THEORY, EXCEPT FOR INTENTIONAL MISCONDUCT OR GROSS NEGLIGENCE BY IMPULSE ALARM LLC, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOUR EXCLUSIVE REMEDY FOR ANY CLAIM AGAINST IMPULSE ALARM LLC OR ITS OFFICERS, AGENTS AND CONTRACTORS IS LIMITED TO THE AMOUNT, IF ANY, PAID TO US IN FEES.
## Governing Law and Jurisdiction
All matters relating to these Terms of Service, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the State of Nevada without giving effect to any choice or conflict of law provision or rule.
Any legal suit, action, or proceeding arising out of, or related to, these Terms of Service, The Website, or The Services shall be instituted exclusively in the federal courts of the United States or the courts of the State of Nevada and Clark County, Nevada. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts. The prevailing party in any such suit or proceeding shall be entitled, in addition to actual damages, if any, to recover its costs and reasonable attorneys' fees.
## Waiver and Severability
No waiver by Impulse Alarm LLC of any term or condition set out in these Terms of Service shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Impulse Alarm LLC to assert a right or provision under these Terms of Service shall not constitute a waiver of such right or provision.  
 If any provision of these Terms of Service is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Service will continue in full force and effect.
## Nevada Residents Only
NEVADA RESIDENTIAL CONSTRUCTION RECOVERY FUND
Payment may be available from the Residential Recovery Fund, if you are damaged financially by a project performed on your residence pursuant to a contract, including construction, remodeling, repair or other improvements, and the damage resulted from certain specified violations of Nevada law by a contractor licensed in this state. To obtain information relating to the Residential Recovery Fund and filing a claim for recovery from the Fund, you may contact the Nevada State Contractors Board at the following locations:
Southern Nevada: 2310 Corporate Circle, Ste 200, Henderson, NV 89074
Phone: (702) 486-1100
Fax: (702) 486-1190
Northern Nevada: 5390 Kietzke Lane, Ste 102, Reno, NV 89511
Phone: (775) 688-1141
Fax: (775) 688-1271
## Entire Agreement
The Terms of Service constitute the sole and entire agreement between you and Impulse Alarm LLC regarding The Website and Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding The Website. If you do not accept the Terms of Service, do not agree to the Terms of Service, and do not use The Website or The Services.
###### Revised: 05/18/2021
`
const termsHtml = computed(() => {
  let htmlContent = terms
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    .replace(/^\n+|\n+$/g, '')
    .replace(/^(?!<h[26]>)(.*)$/gim, '<p>$1</p>')
  return htmlContent
})
</script>
<template>
  <div class="font-sans text-gray-900 antialiased">
    <div class="pt-4 bg-gray-100">
      <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
        <div
          class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose"
        >
          <div v-html="termsHtml" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
h2 {
  margin-top: 0;
  @apply text-3xl font-bold;
}

h6 {
  @apply text-xl font-bold;
}

p {
  @apply text-base;
}
</style>
