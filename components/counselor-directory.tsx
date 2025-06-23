"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Star, Clock, Video, Phone, Calendar, Filter } from "lucide-react"

interface Counselor {
  id: string
  name: string
  credentials: string
  specialties: string[]
  location: string
  state: string
  rating: number
  reviewCount: number
  experience: string
  consultationFee: string
  availability: string
  telehealth: boolean
  languages: string[]
  image?: string
  bio: string
}

const mockCounselors: Counselor[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    credentials: "MS, CGC",
    specialties: ["Cancer Genetics", "BRCA Testing", "Hereditary Cancer"],
    location: "Boston, MA",
    state: "MA",
    rating: 4.9,
    reviewCount: 127,
    experience: "12 years",
    consultationFee: "$250-350",
    availability: "Next available: Tomorrow",
    telehealth: true,
    languages: ["English", "Mandarin"],
    bio: "Specializing in hereditary cancer syndromes with over 12 years of experience helping families understand their genetic risks.",
  },
  {
    id: "2",
    name: "Dr. Michael Rodriguez",
    credentials: "PhD, CGC",
    specialties: ["Cardiovascular Genetics", "Cardiomyopathy", "Arrhythmia"],
    location: "Los Angeles, CA",
    state: "CA",
    rating: 4.8,
    reviewCount: 89,
    experience: "8 years",
    consultationFee: "$200-300",
    availability: "Next available: This week",
    telehealth: true,
    languages: ["English", "Spanish"],
    bio: "Expert in cardiovascular genetics, helping patients understand inherited heart conditions and family screening.",
  },
  {
    id: "3",
    name: "Dr. Emily Johnson",
    credentials: "MS, CGC, FACMG",
    specialties: ["Prenatal Genetics", "Reproductive Planning", "Carrier Screening"],
    location: "New York, NY",
    state: "NY",
    rating: 4.9,
    reviewCount: 156,
    experience: "15 years",
    consultationFee: "$300-400",
    availability: "Next available: Next week",
    telehealth: true,
    languages: ["English"],
    bio: "Board-certified genetic counselor specializing in prenatal genetics and reproductive planning for families.",
  },
  {
    id: "4",
    name: "Dr. David Kim",
    credentials: "MS, CGC",
    specialties: ["Neurogenetics", "Huntington's Disease", "Alzheimer's Risk"],
    location: "Seattle, WA",
    state: "WA",
    rating: 4.7,
    reviewCount: 73,
    experience: "10 years",
    consultationFee: "$275-375",
    availability: "Next available: Today",
    telehealth: true,
    languages: ["English", "Korean"],
    bio: "Specialized in neurogenetic conditions, providing compassionate counseling for neurodegenerative diseases.",
  },
  {
    id: "5",
    name: "Dr. Lisa Thompson",
    credentials: "MS, CGC",
    specialties: ["Pediatric Genetics", "Rare Diseases", "Developmental Delays"],
    location: "Chicago, IL",
    state: "IL",
    rating: 4.8,
    reviewCount: 94,
    experience: "9 years",
    consultationFee: "$225-325",
    availability: "Next available: This week",
    telehealth: true,
    languages: ["English"],
    bio: "Pediatric genetic counselor helping families navigate rare genetic conditions and developmental concerns.",
  },
  {
    id: "6",
    name: "Dr. James Wilson",
    credentials: "PhD, CGC, FACMG",
    specialties: ["Pharmacogenomics", "Drug Response", "Personalized Medicine"],
    location: "Houston, TX",
    state: "TX",
    rating: 4.9,
    reviewCount: 112,
    experience: "14 years",
    consultationFee: "$350-450",
    availability: "Next available: Tomorrow",
    telehealth: true,
    languages: ["English"],
    bio: "Expert in pharmacogenomics, helping patients optimize medication selection based on genetic profiles.",
  },
]

export default function CounselorDirectory() {
  const [counselors, setCounselors] = useState(mockCounselors)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const specialties = Array.from(new Set(mockCounselors.flatMap((c) => c.specialties)))
  const states = Array.from(new Set(mockCounselors.map((c) => c.state))).sort()

  const filteredCounselors = counselors.filter((counselor) => {
    const matchesSearch =
      counselor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      counselor.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesState = !selectedState || counselor.state === selectedState
    const matchesSpecialty = !selectedSpecialty || counselor.specialties.includes(selectedSpecialty)

    return matchesSearch && matchesState && matchesSpecialty
  })

  const handleBookConsultation = (counselor: Counselor) => {
    // In a real app, this would integrate with booking system and charge the counselor a lead fee
    alert(`Booking consultation with ${counselor.name}. They will be charged a $25 lead fee.`)
  }

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <Input
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All states</SelectItem>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All specialties</SelectItem>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid gap-6">
        {filteredCounselors.map((counselor) => (
          <Card key={counselor.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Counselor Info */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={counselor.image || "/placeholder.svg"} alt={counselor.name} />
                      <AvatarFallback className="bg-emerald-100 text-emerald-600 text-lg">
                        {counselor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold">{counselor.name}</h3>
                        <Badge variant="outline">{counselor.credentials}</Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {counselor.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {counselor.rating} ({counselor.reviewCount} reviews)
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {counselor.experience} experience
                        </div>
                      </div>

                      <p className="text-gray-700 text-sm mb-3">{counselor.bio}</p>

                      <div className="flex flex-wrap gap-2">
                        {counselor.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Info */}
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <div>
                      <div className="text-sm text-gray-600">Consultation Fee</div>
                      <div className="font-semibold">{counselor.consultationFee}</div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-600">Availability</div>
                      <div className="font-medium text-green-600">{counselor.availability}</div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      {counselor.telehealth && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Video className="h-3 w-3" />
                          Telehealth
                        </Badge>
                      )}
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        Phone
                      </Badge>
                    </div>

                    {counselor.languages.length > 1 && (
                      <div>
                        <div className="text-sm text-gray-600">Languages</div>
                        <div className="text-sm">{counselor.languages.join(", ")}</div>
                      </div>
                    )}
                  </div>

                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => handleBookConsultation(counselor)}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consultation
                  </Button>

                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCounselors.length === 0 && (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-gray-600">No counselors found matching your criteria. Try adjusting your filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
