import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-200">
        <h1 className="text-black text-4xl font-black">Parked Subdomain</h1>
        <div className="  w-96">
          <Accordion type="single" collapsible className="text-start">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is this website?</AccordionTrigger>
              <AccordionContent>
                This website is a simple website (with this page only) that has
                many subdomains connected to it. The reason for this is because I
                want to save some sub-domains I found that are not taken to
                myself, which are usually for projects I make or because it's
                related to my name (or surname) that I may want to use in the
                future (or old projects I made that I stopped so I needed another
                place to "transfer" the subdomains to keep them).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                I want to use one of the subdomains
              </AccordionTrigger>
              <AccordionContent>
                If you want to use one of the connected sub-domains to this
                website, please open an issue on the{" "}
                <a
                  className="underline text-blue-500"
                  href="https://github.com/itsrn/parked-subdomains"
                >
                  related github repository
                </a>
                . I will review your request, and if I find you deserve to recieve
                the sub-domain, I will let you transfer the domain to your
                project.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    );
  }
  