// import SectionReveal from "@/components/SectionReveal";
// import { Link } from "react-router-dom";
// import {
//   Cloud, Users, BarChart3, BookOpen, Target, Search,
//   TrendingUp, FileText, DollarSign, Layers, Database,
//   ShoppingCart, Briefcase, Monitor, Server, Globe, CreditCard, ArrowRight,
//   Heart, Shield, GraduationCap, Plane, Award,
//   Stethoscope, Eye, Smile
// } from "lucide-react";
// import careersBenefits from "@/assets/careers-benefits.jpg";

// const careerRoles = [
//   { name: "Cloud Solutions", icon: Cloud },
//   { name: "SAP SuccessFactors Employee Central", icon: Users },
//   { name: "SAP SuccessFactors EC Payroll", icon: DollarSign },
//   { name: "SAP SuccessFactors Performance & Goals", icon: Target },
//   { name: "SAP SuccessFactors Learning Mgmt", icon: BookOpen },
//   { name: "SAP SuccessFactors Recruiting & Onboarding", icon: Search },
//   { name: "SAP SuccessFactors Workforce Analytics", icon: TrendingUp },
//   { name: "SAP SuccessFactors Reporting & Analytics", icon: FileText },
//   { name: "SAP SuccessFactors Compensation", icon: BarChart3 },
//   { name: "SAP Cloud Platform Integration", icon: Layers },
//   { name: "SAP S/4 HANA", icon: Database },
//   { name: "SAP Hybris", icon: ShoppingCart },
//   { name: "SAP Ariba", icon: Briefcase },
//   { name: "Salesforce", icon: Monitor },
//   { name: "Workday", icon: Users },
//   { name: "AWS", icon: Server },
//   { name: "Azure", icon: Globe },
//   { name: "SAP Concur", icon: CreditCard },
// ];

// const benefits = [
//   {
//     title: "Health Care",
//     icon: Stethoscope,
//     items: ["Medical, dental and vision insurance", "Life insurance policy"],
//   },
//   {
//     title: "Paid Vacation",
//     icon: Plane,
//     items: ["2 weeks paid vacation for each year of service"],
//   },
//   {
//     title: "Training",
//     icon: GraduationCap,
//     items: ["Free hands-on training", "Tuition fee reimbursement"],
//   },
//   {
//     title: "Profit Sharing",
//     icon: Award,
//     items: ["Profit sharing to eligible employees"],
//   },
// ];

// const Careers = () => {
//   return (
//     <div>
//       {/* Hero Banner */}
//       <section className="relative pt-32 pb-20" style={{ background: "var(--gradient-primary)" }}>
//         <div className="container-custom px-4 sm:px-6 lg:px-8">
//           <p className="text-primary-foreground/60 uppercase tracking-wider text-sm mb-2">Join Our Team</p>
//           <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Careers</h1>
//           <p className="text-primary-foreground/80 max-w-2xl text-lg">
//             Build your career with SreemSol. We offer exciting opportunities in Cloud Solutions, IT, and Project Management.
//           </p>
//         </div>
//       </section>

//       {/* Intro */}
//       <section className="section-padding bg-background">
//         <div className="container-custom">
//           <SectionReveal>
//             <div className="text-center max-w-3xl mx-auto mb-12">
//               <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Opportunities</p>
//               <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
//                 Career <span className="gradient-text">Opportunities</span>
//               </h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 SreemSol welcomes talented and motivated people who seek rewarding career opportunities in Cloud Solutions. We offer exciting careers in IT and Project Management with growth potential and competitive benefits.
//               </p>
//             </div>
//           </SectionReveal>

//           {/* Career Roles Grid */}
//           <SectionReveal delay={200}>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {careerRoles.map((role, i) => (
//                 <div
//                   key={role.name}
//                   className="group bg-card p-4 rounded-xl card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
//                 >
//                   <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                     <role.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
//                   </div>
//                   <span className="text-foreground font-medium text-sm">{role.name}</span>
//                 </div>
//               ))}
//             </div>
//           </SectionReveal>
//         </div>
//       </section>

//       {/* Equal Opportunity */}
//       <section className="section-padding bg-muted">
//         <div className="container-custom">
//           <SectionReveal>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
//                   <Shield className="h-4 w-4" />
//                   Equal Opportunity Employer
//                 </div>
//                 <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
//                   People Come <span className="gradient-text">First</span>
//                 </h2>
//                 <p className="text-muted-foreground leading-relaxed mb-4">
//                   At SreemSol, people are our greatest asset. We value every employee and foster a culture built on honor, trust, freedom, and team spirit. We believe in sharing the success of the business with those who help create it.
//                 </p>
//                 <p className="text-muted-foreground leading-relaxed mb-4">
//                   We offer a dynamic and inclusive work environment where professionals can develop their careers through continuous training, mentorship, and challenging project opportunities. Our commitment is to provide a rewarding, equitable, and supportive workplace for all.
//                 </p>
//                 <div className="flex flex-wrap gap-3">
//                   {[
//                     { icon: Heart, label: "Inclusive Culture" },
//                     { icon: Eye, label: "Transparency" },
//                     { icon: Smile, label: "Work-Life Balance" },
//                   ].map((item) => (
//                     <div key={item.label} className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg card-shadow text-sm">
//                       <item.icon className="h-4 w-4 text-primary" />
//                       <span className="text-foreground font-medium">{item.label}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <img
//                 src={careersBenefits}
//                 alt="SreemSol workplace culture"
//                 className="rounded-xl card-shadow w-full object-cover h-[400px]"
//               />
//             </div>
//           </SectionReveal>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="section-padding bg-background">
//         <div className="container-custom">
//           <SectionReveal>
//             <div className="text-center mb-12">
//               <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Perks</p>
//               <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
//                 Benefits <span className="gradient-text">Program</span>
//               </h2>
//             </div>
//           </SectionReveal>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {benefits.map((benefit, i) => (
//               <SectionReveal key={benefit.title} delay={i * 100}>
//                 <div className="bg-card p-6 rounded-xl card-shadow h-full text-center">
//                   <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
//                     <benefit.icon className="h-7 w-7 text-primary" />
//                   </div>
//                   <h3 className="font-heading font-semibold text-foreground mb-3">{benefit.title}</h3>
//                   <ul className="space-y-2">
//                     {benefit.items.map((item) => (
//                       <li key={item} className="text-muted-foreground text-sm">{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </SectionReveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20" style={{ background: "var(--gradient-primary)" }}>
//         <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
//           <SectionReveal>
//             <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
//               Ready to Join Our Team?
//             </h2>
//             <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
//               Submit your resume and let us know how your skills can contribute to our growing team.
//             </p>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-card text-foreground font-semibold hover:opacity-90 transition-all shadow-lg"
//             >
//               Apply Now <ArrowRight className="h-4 w-4" />
//             </Link>
//           </SectionReveal>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Careers;
import SectionReveal from "@/components/SectionReveal";
import { Link } from "react-router-dom";
import {
  Cloud, Users, BarChart3, BookOpen, Target, Search,
  TrendingUp, FileText, DollarSign, Layers, Database,
  ShoppingCart, Briefcase, Monitor, Server, Globe, CreditCard, ArrowRight
} from "lucide-react";

const careerRoles = [
  { name: "Cloud Solutions", icon: Cloud },
  { name: "SAP SuccessFactors Employee Central", icon: Users },
  { name: "SAP SuccessFactors EC Payroll", icon: DollarSign },
  { name: "SAP SuccessFactors Performance & Goals", icon: Target },
  { name: "SAP SuccessFactors Learning Mgmt", icon: BookOpen },
  { name: "SAP SuccessFactors Recruiting & Onboarding", icon: Search },
  { name: "SAP SuccessFactors Workforce Analytics", icon: TrendingUp },
  { name: "SAP SuccessFactors Reporting & Analytics", icon: FileText },
  { name: "SAP SuccessFactors Compensation", icon: BarChart3 },
  { name: "SAP Cloud Platform Integration", icon: Layers },
  { name: "SAP S/4 HANA", icon: Database },
  { name: "SAP Hybris", icon: ShoppingCart },
  { name: "SAP Ariba", icon: Briefcase },
  { name: "Salesforce", icon: Monitor },
  { name: "Workday", icon: Users },
  { name: "AWS", icon: Server },
  { name: "Azure", icon: Globe },
  { name: "SAP Concur", icon: CreditCard },
];

const Careers = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <p className="text-primary-foreground/60 uppercase tracking-wider text-sm mb-2">
            Join Our Team
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Careers
          </h1>

          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Build your career with SreemSol. We offer exciting opportunities in Cloud Solutions, IT, and Project Management.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">
                Opportunities
              </p>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Career <span className="gradient-text">Opportunities</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                SreemSol welcomes talented and motivated people who seek rewarding career opportunities in Cloud Solutions. We offer exciting careers in IT and Project Management with growth potential and competitive benefits.
              </p>
            </div>
          </SectionReveal>

          {/* Career Roles Grid */}
          <SectionReveal delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {careerRoles.map((role) => (
                <div
                  key={role.name}
                  className="group bg-card p-4 rounded-xl card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                >
                  <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <role.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  <span className="text-foreground font-medium text-sm">
                    {role.name}
                  </span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
              Ready to Join Our Team?
            </h2>

            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Submit your resume and let us know how your skills can contribute to our growing team.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-card text-foreground font-semibold hover:opacity-90 transition-all shadow-lg"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Careers;