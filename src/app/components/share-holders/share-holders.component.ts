import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-holders',
  templateUrl: './share-holders.component.html',
  styleUrls: ['./share-holders.component.css']
})
export class ShareHoldersComponent implements OnInit {
  panelOpenState = false
  constructor() { }

  ngOnInit(): void {
  }

files = [
  {
    title:'Financial Year 2021-22',
    files:[
      {
        name:'Shareholding Pattern Q1 (2021-22)',
        path:'assets/pdf/shareholders/June_2021.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2021-22)',
        path:'assets/pdf/shareholders/shareholding_Acms_sep21.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2021-22)',
        path:'assets/pdf/shareholders/Shareholding Pattern Q3 2021-22.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2021-22)',
        path:'assets/pdf/shareholders/Avon_march2022__Q4_acms.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2020-21',
    files:[
      {
        name:'Shareholding Pattern Q1 (2020-21)',
        path:'assets/pdf/shareholders/SHP 30.06.2020 ACMS.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2020-21)',
        path:'assets/pdf/shareholders/sep_2020.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2020-21)',
        path:'assets/pdf/shareholders/Dec_2020.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2020-21)',
        path:'assets/pdf/shareholders/March_2021.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2019-20',
    files:[
      {
        name:'Shareholding Pattern Q1 (2019-20)',
        path:'assets/pdf/shareholders/AGSL_shareholding.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2019-20)',
        path:'assets/pdf/shareholders/ACMS_SHAREHOLDING.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2019-20)',
        path:'assets/pdf/shareholders/SHP_Q3_ACMS.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2019-20)',
        path:'assets/pdf/shareholders/SHP 31.03.2020 ACMS.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2018-19',
    files:[
      {
        name:'Shareholding Pattern Q1 (2018-19)',
        path:'assets/pdf/shareholders/shareholding_avonmore_1819.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2018-19)',
        path:'assets/pdf/shareholders/acms_shareholding (1).pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2018-19)',
        path:'assets/pdf/shareholders/shareholding_ACMS1819.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2018-19)',
        path:'assets/pdf/shareholders/shareholdingpattern_ACMs_mar.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2017-18',
    files:[
      {
        name:'Shareholding Pattern Q1 (2017-18)',
        path:'assets/pdf/shareholders/shareholding_Avonmore_jul17.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2017-18)',
        path:'assets/pdf/shareholders/ShareholdingPatternQ21718.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2017-18)',
        path:'assets/pdf/shareholders/shareholding_ACMS_DEC.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2017-18)',
        path:'assets/pdf/shareholders/shareholding_AVonmore_1718.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2016-17',
    files:[
      {
        name:'Shareholding Pattern Q1 (2016-17)',
        path:'assets/pdf/shareholders/shareholding_ACMs.pdf'
      },
      {
        name:'Shareholding Pattern Q2 (2016-17)',
        path:'assets/pdf/shareholders/shareholdingspattern_Avonmroe_1.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2016-17)',
        path:'assets/pdf/shareholders/shareholding_PatternQ3.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2016-17)',
        path:'assets/pdf/shareholders/shareholding_ACMS_AprQ4.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2015-16',
    files:[
      {
        name:'Shareholding Pattern Q2 (2015-16)',
        path:'assets/pdf/shareholders/shareholding_pattern_Q2.pdf'
      },
      {
        name:'Shareholding Pattern Q3 (2015-16)',
        path:'assets/pdf/shareholders/shareholding_Pattern_Q3.pdf'
      },
      {
        name:'Shareholding Pattern Q4 (2015-16)',
        path:'assets/pdf/shareholders/shareholding_Pattern_Q4.pdf'
      },
    ]
  },
]

files2 = [
  {
    title:'2016-17 (Q1)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/intimation_website_ACMS.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/website_ACMs_publish.pdf'
      },
      {
        name:'Outcome of Board Meeting',
        path:'assets/pdf/shareholders/website_ACMs_outcome.pdf'
      },
    ]
  },
  {
    title:'2016-17 (Q2)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/avonmoe _Website_1.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/ACMS PUBLISHED NOTICE_NOV 2016.pdf'
      },
    ]
  },
  {
    title:'2016-17 (Q3)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/acms_Intimation_01_02_2017.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/acms_Intimation publish_20170202153556.pdf'
      },
    ]
  },
  {
    title:'2016-17 (Q4)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/website_ACMs_May17.pdf'
      },
      {
        name:'Outcome of Board Meeting Q4 16-17',
        path:'assets/pdf/shareholders/outcome_website_Avomnore_Mar_17.pdf'
      },
    ]
  },
  {
    title:'2017-18 (Q1)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/notice_Avonmore_BSE_Aug17.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/published_ACMS_Aug17.pdf'
      },
      {
        name:'Outcome of Board Meeting Q1 17-18',
        path:'assets/pdf/shareholders/outcome of Boardmeeting_avonmore_Jun117.pdf'
      },
    ]
  },
  {
    title:'2017-18 (Q2)',
    files:[
      {
        name:'Intimation Of Board Meeting Nov 2017',
        path:'assets/pdf/shareholders/intimation_boardmeetingNov17.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication Nov 2017',
        path:'assets/pdf/shareholders/publication_boardmeetingNov17.pdf'
      },
      {
        name:'Outcome of Board Meeting Nov 17-18',
        path:'assets/pdf/shareholders/Outcome_2017.pdf'
      },
      {
        name:'Intimation Of Board Meeting Dec 2017',
        path:'assets/pdf/shareholders/intimation_ACMSDec17.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication Dec 2017',
        path:'assets/pdf/shareholders/BSE_NewspaperPublication_Dec2017.pdf'
      },
    ]
  },
  {
    title:'2018-19 (Q1)',
    files:[
      {
        name:'Intimation Of Board Meeting 2018',
        path:'assets/pdf/shareholders/Intimation of board meeting1819.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication 2018',
        path:'assets/pdf/shareholders/bse_publication_sw1819.pdf'
      },
      {
        name:'Outcome of Board Meeting',
        path:'assets/pdf/shareholders/outcome of board meeting1819.pdf'
      },
    ]
  },
  {
    title:'2018-19 (Q2)',
    files:[
      {
        name:'Intimation Of Board Meeting 2018',
        path:'assets/pdf/shareholders/notice_avonmoresep18.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication 2018',
        path:'assets/pdf/shareholders/publish_Avonmoresep18.pdf'
      },
    ]
  },
  {
    title:'2018-19 (Q3)',
    files:[
      {
        name:'Intimation Of Board Meeting 2019',
        path:'assets/pdf/shareholders/acms_BSE.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication 2019',
        path:'assets/pdf/shareholders/acms_Publish.pdf'
      },
      {
        name:'Outcome of Board Meeting',
        path:'assets/pdf/shareholders/outcome_avonmore.pdf'
      },
    ]
  },
  {
    title:'2018-19 (Q4)',
    files:[
      {
        name:'Intimation Of Board Meeting 2019',
        path:'assets/pdf/shareholders/ACMS_BSE_intimation.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication 2019',
        path:'assets/pdf/shareholders/ACMS_publish_Q4.pdf'
      },
    ]
  },
  {
    title:'2019-20 (Q1)',
    files:[
      {
        name:'Outcome Of Board Meeting Dated 21 August 2019',
        path:'assets/pdf/shareholders/outcome of board meeting dated 21.08.2019.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/intimation of board meeting.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication 2019',
        path:'assets/pdf/shareholders/ACMS_publish_Q1_6sep.pdf'
      },
      {
        name:'Outcome Of Board Meeting Dated 14 September 2019',
        path:'assets/pdf/shareholders/outcome_sw.pdf'
      },
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/ACMS_BSE_74.pdf'
      },
      {
        name:'Intimation of implementation of IND-AS',
        path:'assets/pdf/shareholders/ACMS_BSE_INDAS.pdf'
      },
    ]
  },
  {
    title:'2019-20 (Q2)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74_5_sep19.pdf'
      },
      {
        name:'Intimation Of Board Meeting 2019',
        path:'assets/pdf/shareholders/intimation_dec19_BSE.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication 2019',
        path:'assets/pdf/shareholders/dec19_acms_publish.pdf'
      },
      {
        name:'Outcome Of Board Meeting Dated 14 December 2019',
        path:'assets/pdf/shareholders/outcome_avonmore_dec19.pdf'
      },
    ]
  },
  {
    title:'2019-20 (Q3)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74_jan20.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/BMnotice_BSE_jan2020.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/publish_BSE_Acms_jan2020.pdf'
      },
    ]
  },
  {
    title:'2019-20 (Q4)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/74(5) 31.03.2020.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/BM_Notice_ACMS_30.07.2020.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/Newspaper Publication.pdf'
      },
      {
        name:'Outcome Of Board Meeting',
        path:'assets/pdf/shareholders/Outcome_ACMS_Q4.pdf'
      },
    ]
  },
  {
    title:'2020-21 (Q1)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/74(5)30.06.2020.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/intimationBM_Acms.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/publication_intimation_Acms.pdf'
      },
    ]
  },
  {
    title:'2020-21 (Q2)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/ACMS_74-q3.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/BMavonmore_q2.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/acms_publication_q2.pdf'
      },
      {
        name:'Outcome Of Board Meeting',
        path:'assets/pdf/shareholders/outcome_avonmore_q2.pdf'
      },
    ]
  },
  {
    title:'2020-21 (Q3)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/AVONMORE_74_q2.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/Intimation_ACMS-Q3.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/publication_ACMS_Q3.pdf'
      },
      {
        name:'Outcome Of Board Meeting',
        path:'assets/pdf/shareholders/outcome_Acms_q3.pdf'
      },
    ]
  },
  {
    title:'2020-21 (Q4)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/bse_intimation.pdf'
      },
      {
        name:'Outcome Of Board Meeting',
        path:'assets/pdf/shareholders/outcome of boardmeeting.pdf'
      },
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74_q4.pdf'
      },
    ]
  },
  {
    title:'2021-22 (Q1)',
    files:[
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/BM_Notice_aug2021.pdf'
      },
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74june2021.pdf'
      },
    ]
  },
  {
    title:'2021-22 (Q2)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74_Q2.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/BM_ACMS_sep2021.pdf'
      },
      {
        name:'Outcome of Board Meeting',
        path:'assets/pdf/shareholders/outcome_Sep21_Acms.pdf'
      },
    ]
  },
  {
    title:'2021-22 (Q3)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/74_ACMS_dec21.pdf'
      },
      {
        name:'Intimation Of Board Meeting Publication',
        path:'assets/pdf/shareholders/intimation_BM_acms_feb22.pdf'
      },
      {
        name:'Outcome of Board Meeting',
        path:'assets/pdf/shareholders/outcome_feb22_Acms.pdf'
      },
    ]
  },
  {
    title:'2021-22 (Q4)',
    files:[
      {
        name:'Certificate Under Regulation 74(5) of SEBI (Depository and Participants) Regulations, 2018',
        path:'assets/pdf/shareholders/acms_74_MARCH22.pdf'
      },
      {
        name:'Intimation Of Board Meeting',
        path:'assets/pdf/shareholders/intimation_BM_may2022.pdf'
      },
      {
        name:'Intimation Of Postponement Of Board Meeting',
        path:'assets/pdf/shareholders/intimationofboardmeeting_ACMS.pdf'
      },
      {
        name:'Outcome of Board Meeting',
        path:'assets/pdf/shareholders/outcome_acms_2022.pdf'
      },
    ]
  },
]

files3 = [
  {
    title:'Financial Year 2021-22',
    files: [
      {
        name:'Book Closer Notice',
        path:'assets/pdf/shareholders/acms_bookclosure_2021.pdf'
      },
      {
        name:'Book Closer Notice And E-Voting Instructions As Published',
        path:'assets/pdf/shareholders/acms_publication_bookclosure_2021.pdf'
      },
      {
        name:'AVonmore notice of AGM',
        path:'assets/pdf/shareholders/acms_bookclosure_2021 (1).pdf'
      },
    ]
  },
  {
    title:'Financial Year 2020-21',
    files: [
      {
        name:'Book Closer Notice',
        path:'assets/pdf/shareholders/ACMS_bookclosure_2020.pdf'
      },
      {
        name:'Book Closer Notice And E-Voting Instructions As Published',
        path:'assets/pdf/shareholders/acms_agmnotice_publication_2020.pdf'
      },
      {
        name:'AVonmore notice of AGM',
        path:'assets/pdf/shareholders/notice_2020_Acms.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2019-20',
    files: [
      {
        name:'Book Closer Notice',
        path:'assets/pdf/shareholders/bookclosure_acms.pdf'
      },
      {
        name:'Book Closer Notice And E-Voting Instructions As Published',
        path:'assets/pdf/shareholders/bookclosurepublication_acms.pdf'
      },
      {
        name:'AVonmore notice of AGM',
        path:'assets/pdf/shareholders/notice of AGM_ACMs.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2018-19',
    files: [
      {
        name:'Out Come & Proceeding Of Annual General Meeting',
        path:'assets/pdf/shareholders/acms_proceedings.pdf'
      },
      {
        name:'Book Closer Notice',
        path:'assets/pdf/shareholders/avonmore_bookclosure.pdf'
      },
      {
        name:'Book Closer Notice And E-Voting Instructions As Published',
        path:'assets/pdf/shareholders/avonmore_publication.pdf'
      },
      {
        name:'AVonmore notice of AGM',
        path:'assets/pdf/shareholders/AVonmore _notice of AGM.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2017-18',
    files: [
      {
        name:'Out Come & Proceeding Of Annual General Meeting',
        path:'assets/pdf/shareholders/ACMS_BSE_17.pdf'
      }
    ]
  },
  {
    title:'Financial Year 2016-17',
    files: [
      {
        name:'Book Closer Notice',
        path:'assets/pdf/shareholders/shareholders_Meetings.pdf'
      },
      {
        name:'Book Closer Notice And E-Voting Instructions As Published',
        path:'assets/pdf/shareholders/website_Acms_16.pdf'
      },
      {
        name:'Out Come & Proceeding Of Annual General Meeting',
        path:'assets/pdf/shareholders/website_ACMs_roceeding.pdf'
      },
    ]
  },
]

files4 = [
  {
    title:'Financial Year 2021-22',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_ACMS_june2021.pdf'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/acms_RSCAR_sep21.pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_ACMS_dec21.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/rscar_acms_march2022.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2020-21',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/RAR_ACMS_30.06.2020.pdf'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/ACMS_SCAR_sep2020.pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/ACMS_SCAR_sep2020.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_ACMS (1).pdf'
      },
    ]
  },
  {
    title:'Financial Year 2019-20',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/RSCAR.pdf'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/acms_SAR.pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_ACMS_jan20.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/RAR ACMS_final 31.03.2020.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2018-19',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/Avonmore_SAR_sw.pdf'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/ACMS_SAR (1).pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/acms_SAr19.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/reconsiliation of share capital_mar.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2017-18',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_AVONMORE_jul17.pdf'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/ACMS_SAR_17.pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/Avonmore_SAR_18.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_march18_Q4.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2016-17',
    files:[
      {
        name:'Q1 - Reconciliation of Share Capital Audit Report',
        path:'/'
      },
      {
        name:'Q2 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/SAR_acms_WEBSITE.pdf'
      },
      {
        name:'Q3 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/sar_ACMs.pdf'
      },
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/sar_ACMS_website_Mar17.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2015-16',
    files:[
      {
        name:'Q4 - Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/reconciliation_of_share_Q4.pdf'
      },
      {
        name:'Reconciliation of Share Capital Audit Report',
        path:'assets/pdf/shareholders/reconciliation_of_share_Q3.pdf'
      },
    ]
  },
]

files5 = [
  {
    title:'Financial Year 2021-22',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/acms_compliant.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_acms_sep21.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_Acms_dec21.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_mrach22_Acms.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2020-21',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/Investor Complaints 30.06.2020.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/AVONMORE_COMPLAINT_sep2020.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/ACMS_complaint_dec2020.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_acms_march2021.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2019-20',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/ACMS_complaint.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/ACMS_complaint_OCT19.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/acms_complaint_jan20.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/Investor Complaints 31.03.2020.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2018-19',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/acms_complaint1819.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/compliance_ACMs.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/ACMS_ComplaintJan19.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_ACMS_mar.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2017-18',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_website_avonmore_Jul17.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/complaint_website_avonmore1718.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/acms_Complaint_DEC.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'/'
      },
    ]
  },
  {
    title:'Financial Year 2016-17',
    files:[
      {
        name:'Q1 - Investor Complaint',
        path:'assets/pdf/shareholders/website_ACMS.pdf'
      },
      {
        name:'Q2 - Investor Complaint',
        path:'assets/pdf/shareholders/website_avonmore.pdf'
      },
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/BSE_Complaint.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/complaintstatus_ACMs_MAR17.pdf'
      },
    ]
  },
  {
    title:'Financial Year 2015-16',
    files:[
      {
        name:'Q3 - Investor Complaint',
        path:'assets/pdf/shareholders/Q3_Investors_Complaint.pdf'
      },
      {
        name:'Q4 - Investor Complaint',
        path:'assets/pdf/shareholders/Q3_Investors_Complaint_Q4.pdf'
      },
    ]
  },
]

}
