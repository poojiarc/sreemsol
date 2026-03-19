import { Database, Users, ClipboardList, Wrench, Cloud, Layers } from "lucide-react";
import serviceErp from "@/assets/service-erp.jpg";
import serviceStaffing from "@/assets/IT-Staffing.png";
import serviceProject from "@/assets/service-project.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceSaas from "@/assets/service-saas.jpg";
import servicePaas from "@/assets/service-paas.jpg";

const services = [
  {
    title: "ERP Solutions",
    description: "End-to-end ERP implementation, customization, and optimization to streamline your business processes and drive operational excellence.",
    image: serviceErp,
    icon: Database,
  },
  {
    title: "IT Staffing",
    description: "Access top-tier technical talent with our comprehensive IT staffing solutions. We match skilled professionals with your project requirements.",
    image: serviceStaffing,
    icon: Users,
  },
  {
    title: "Project Planning & Execution",
    description: "From ideation to deployment, we manage every phase of your IT projects with agile methodologies and proven delivery frameworks.",
    image: serviceProject,
    icon: ClipboardList,
  },
  {
    title: "Post Project Maintenance",
    description: "Ensure continuous performance with our dedicated maintenance and support services, including monitoring, updates, and troubleshooting.",
    image: serviceMaintenance,
    icon: Wrench,
  },
  {
    title: "Software As A Service",
    description: "Expert implementation of leading SaaS platforms including SAP SuccessFactors, Workday, and SAP Concur for seamless workforce management.",
    image: serviceSaas,
    icon: Cloud,
  },
  {
    title: "Platform As A Service",
    description: "Leverage cloud integration platforms like SAP Cloud Platform Integration and Dell Boomi to connect your enterprise systems effortlessly.",
    image: servicePaas,
    icon: Layers,
  },
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <div
          key={service.title}
          className="group relative h-72 rounded-xl overflow-hidden cursor-pointer card-shadow hover:card-shadow-hover transition-all duration-500"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${service.image})` }}
          />

          {/* Default Overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ background: "var(--gradient-card-overlay)" }}
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <div className="flex items-center gap-3 mb-2">
              <service.icon className="h-6 w-6 text-primary" />
              <h3 className="font-heading font-semibold text-lg text-primary-foreground">
                {service.title}
              </h3>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
