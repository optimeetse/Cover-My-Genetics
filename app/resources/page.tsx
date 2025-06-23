import Navbar from "@/components/navbar"
import GeneticResources from "@/components/genetic-resources"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Info, Heart, Brain } from "lucide-react"

export default function ResourcesPage() {
  const conditions = [
    {
      name: "Hereditary Breast and Ovarian Cancer",
      genes: "BRCA1, BRCA2",
      description: "Genetic mutations that increase risk of breast and ovarian cancers",
      icon: Heart,
    },
    {
      name: "Huntington's Disease",
      genes: "HTT",
      description: "Progressive neurodegenerative disorder affecting movement and cognition",
      icon: Brain,
    },
    {
      name: "Cystic Fibrosis",
      genes: "CFTR",
      description: "Genetic disorder affecting lungs and digestive system",
      icon: Heart,
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Genetic Resources & Information</h1>
            <p className="text-gray-600 text-lg">
              Access reliable information about genetic conditions, testing, and support resources.
            </p>
          </div>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <AlertTriangle className="h-5 w-5" />
                Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-700">
              <p>
                The information provided here is for educational purposes only and should not replace professional
                medical advice. Always consult with a healthcare provider or certified genetic counselor for
                personalized guidance.
              </p>
            </CardContent>
          </Card>

          <GeneticResources />

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Common Genetic Conditions</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {conditions.map((condition, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <condition.icon className="h-5 w-5" />
                      {condition.name}
                    </CardTitle>
                    <p className="text-sm text-blue-600 font-medium">Gene(s): {condition.genes}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{condition.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Info className="h-5 w-5" />
                Understanding Genetic Testing
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Types of Genetic Tests:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Diagnostic Testing:</strong> Confirms or rules out a genetic condition
                  </li>
                  <li>
                    <strong>Predictive Testing:</strong> Determines risk of developing a condition
                  </li>
                  <li>
                    <strong>Carrier Testing:</strong> Identifies carriers of genetic conditions
                  </li>
                  <li>
                    <strong>Pharmacogenomic Testing:</strong> Guides medication selection and dosing
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Before Getting Tested:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Consider the potential benefits and limitations</li>
                  <li>Understand how results might affect you and your family</li>
                  <li>Discuss with a genetic counselor or healthcare provider</li>
                  <li>Consider privacy and insurance implications</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
