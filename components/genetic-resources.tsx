import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function GeneticResources() {
  const resources = [
    {
      title: "National Human Genome Research Institute",
      description: "Comprehensive genetic information and research updates",
      url: "https://www.genome.gov",
      icon: BookOpen,
      category: "Education",
    },
    {
      title: "Genetic Alliance",
      description: "Support and advocacy for genetic conditions",
      url: "https://www.geneticalliance.org",
      icon: Users,
      category: "Support",
    },
    {
      title: "National Society of Genetic Counselors",
      description: "Find certified genetic counselors in your area",
      url: "https://www.nsgc.org",
      icon: Shield,
      category: "Professional",
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Genetic Resources</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <resource.icon className="h-5 w-5" />
                {resource.title}
              </CardTitle>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 w-fit">
                {resource.category}
              </span>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-1">
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Button variant="outline" size="sm" asChild>
                <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                  Visit Resource <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
