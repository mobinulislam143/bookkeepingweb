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
 * Note: the brief maps a `newyorkqueensstreet` photo to the Jamaica/Queens
 * section, but that file was not among the supplied assets. Rather than
 * substitute an unrelated interior shot, the local section is carried by the
 * drawn street-grid system in components/viz/QueensLines.tsx. Drop a real
 * neighborhood photo into assets/image, add it here, and swap the motif for a
 * <Photo /> if one is ever supplied.
 */
export const IMAGES = {
  homeHero: {
    src: bookkeeperWorkingLaptop,
    alt: "Accountant reviewing financial records on a laptop at a desk",
  },
  whoWeHelp: {
    src: smallBusinessOwnerOffice,
    alt: "Business owner reviewing financial reporting in their office",
  },
  process: {
    src: accountantClientMeeting,
    alt: "Accountant and client reviewing financial reports together across a desk",
  },
  clientRelationship: {
    src: businessMeetingSmallBusiness,
    alt: "Business meeting in an office with financial documents open on the table",
  },
  aboutPortrait: {
    src: accountantWorkingOffice,
    alt: "Accountant working at a desk in a daylit office",
  },
  aboutWorkspace: {
    src: womanWorkingLaptopOffice,
    alt: "Accountant working at a laptop beside organized client files",
  },
  bookkeepingHero: {
    src: businessDocumentsDesk,
    alt: "Business records and folders organized on a desk",
  },
  bookkeepingDetail: {
    src: financialDocumentsDesk,
    alt: "Financial statements laid out for reconciliation",
  },
  bookkeepingPaperwork: {
    src: accountingPaperworkOffice,
    alt: "Accounting records being sorted and categorized in an office",
  },
  taxHero: {
    src: calculatorDocumentsLaptop,
    alt: "Tax documents and reporting reviewed at a work desk",
  },
  taxDetail: {
    src: taxDocumentsAccountant,
    alt: "Accountant reviewing tax documents before preparing a filing",
  },
  businessSupport: {
    src: professionalOfficeDeskLaptop,
    alt: "Professional workspace with financial reporting open on a laptop",
  },
  individualSupport: {
    src: manWorkingLaptopOffice,
    alt: "Business owner reviewing accounts on a laptop",
  },
} as const;
