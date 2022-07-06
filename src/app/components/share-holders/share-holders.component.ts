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
