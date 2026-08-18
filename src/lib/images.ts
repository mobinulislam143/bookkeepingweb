import accountantClientMeeting from "@/assets/image/accountantclientmeeting.jpg";
import accountantWorkingOffice from "@/assets/image/accountantworkingoffice.jpg";
import accountingPaperworkOffice from "@/assets/image/accountingpaperworkoffice.jpg";
import bookkeeperWorkingLaptop from "@/assets/image/bookkeeperworkinglaptop.jpg";
import businessDocumentsDesk from "@/assets/image/businessdocumentsdesk.jpg";
import businessMeetingSmallBusiness from "@/assets/image/businessmeetingofficsmallbusiness.jpg";
import calculatorDocumentsLaptop from "@/assets/image/calculatordocumentslaptop.jpg";
import financialDocumentsDesk from "@/assets/image/financialdocumentsdesk.jpg";
import manWorkingLaptopOffice from "@/assets/image/manworkinglaptopoffice.jpg";
import professionalOfficeDeskLaptop from "@/assets/image/professionalofficedesklaptop.jpg";
import smallBusinessOwnerOffice from "@/assets/image/smallbusinessowneroffice.jpg";
import taxDocumentsAccountant from "@/assets/image/taxdocumentsaccountant.jpg";
import womanWorkingLaptopOffice from "@/assets/image/womanworkinglaptopoffice.jpg";

/**
 * The supplied photography, used exactly as delivered — no recolouring, no
 * duotone, no generated substitutes. Alt text describes what the photo shows
 * rather than repeating the business name.
 *
 * Note: the brief also maps a `newyorkqueensstreet` photo to the Jamaica/Queens
 * section. That file was not among the supplied assets, so that one slot uses
 * ImagePlaceholder with its art direction until a real neighborhood photo
 * arrives. See the About page.
 */
export const IMAGES = {
  homeHero: {
    src: bookkeeperWorkingLaptop,
    alt: "Bookkeeper reviewing financial records on a laptop at a desk",
  },
  whoWeHelp: {
    src: smallBusinessOwnerOffice,
    alt: "Small business owner going over paperwork in their office",
  },
  process: {
    src: accountantClientMeeting,
    alt: "Accountant and client reviewing documents together across a desk",
  },
  clientRelationship: {
    src: businessMeetingSmallBusiness,
    alt: "Small business meeting in an office, documents open on the table",
  },
  aboutPortrait: {
    src: accountantWorkingOffice,
    alt: "Accountant working at a desk in a daylit office",
  },
  aboutWorkspace: {
    src: womanWorkingLaptopOffice,
    alt: "Bookkeeper working at a laptop beside organized files",
  },
  bookkeepingHero: {
    src: businessDocumentsDesk,
    alt: "Business documents and folders organized on a desk",
  },
  bookkeepingDetail: {
    src: financialDocumentsDesk,
    alt: "Financial statements and receipts laid out for reconciliation",
  },
  bookkeepingPaperwork: {
    src: accountingPaperworkOffice,
    alt: "Accounting paperwork being sorted and categorized in an office",
  },
  taxHero: {
    src: calculatorDocumentsLaptop,
    alt: "Calculator, tax documents and a laptop on a work desk",
  },
  taxDetail: {
    src: taxDocumentsAccountant,
    alt: "Accountant reviewing tax documents before preparing a return",
  },
  businessSupport: {
    src: professionalOfficeDeskLaptop,
    alt: "Professional office desk set up with a laptop and business records",
  },
  individualSupport: {
    src: manWorkingLaptopOffice,
    alt: "Person reviewing their personal tax paperwork on a laptop",
  },
} as const;
