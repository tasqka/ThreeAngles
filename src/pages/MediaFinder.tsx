import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import {
  Search,
  SlidersHorizontal,
  X,
  MapPin,
  Plus,
  ChevronDown,
  ChevronUp,
  Calendar,
  Users,
  Maximize2,
  DollarSign,
  Check,
  BarChart3,
  Layers,
  ZoomIn,
  ZoomOut,
  Crosshair,
  Building,
  Monitor,
  Eye,
  Ruler,
} from "lucide-react";
import { inventory, type InventoryItem, type Format } from "../data/inventory";

/* ─── Leaflet icon fix ─── */
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* ─── Pin icons by status ─── */
function createPinIcon(color: string) {
  return new L.DivIcon({
    className: "",
    html: `<div style="width:12px;height:12px;background:${color};border:2px solid white;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,0.25);"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });
}

function createActivePinIcon(color: string) {
  return new L.DivIcon({
    className: "",
    html: `<div style="width:20px;height:20px;background:${color};border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
}

const pinColors = {
  available: "#22c55e",
  limited: "#f59e0b",
  booked: "#ef4444",
};

/* ─── Map events ─── */
function MapEventsHandler({ onBoundsChange }: { onBoundsChange: (bounds: L.LatLngBounds) => void }) {
  useMapEvents({ moveend: (e) => onBoundsChange(e.target.getBounds()) });
  return null;
}

function FlyToMarker({ item }: { item: InventoryItem | null }) {
  const map = useMap();
  useEffect(() => {
    if (item) map.flyTo([item.lat, item.lng], 16, { duration: 1.2 });
  }, [item, map]);
  return null;
}

/* ─── Filter types ─── */
interface Filters {
  search: string;
  city: string;
  formats: Format[];
  digital: boolean | null;
  illuminated: boolean | null;
  availability: string;
  minImpressions: number;
  trafficType: string;
  minPrice: number;
  maxPrice: number;
}

const defaultFilters: Filters = {
  search: "",
  city: "",
  formats: [],
  digital: null,
  illuminated: null,
  availability: "",
  minImpressions: 0,
  trafficType: "",
  minPrice: 0,
  maxPrice: 0,
};

/* ─── Filter Panel ─── */
function FilterPanel({
  filters,
  setFilters,
  activeCount,
  onClear,
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
  activeCount: number;
  onClear: () => void;
}) {
  const [openSection, setOpenSection] = useState<string | null>("location");
  const toggle = (s: string) => setOpenSection(openSection === s ? null : s);
  const update = <K extends keyof Filters>(key: K, val: Filters[K]) =>
    setFilters({ ...filters, [key]: val });

  const toggleFormat = (fmt: Format) => {
    const current = filters.formats;
    update("formats", current.includes(fmt) ? current.filter((f) => f !== fmt) : [...current, fmt]);
  };

  const Section = ({
    id,
    icon: Icon,
    label,
    children,
  }: {
    id: string;
    icon: React.ElementType;
    label: string;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-neutral-100 last:border-0">
      <button
        onClick={() => toggle(id)}
        className="w-full flex items-center justify-between py-2.5 hover:text-brand-orange-500 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Icon className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">{label}</span>
        </div>
        {openSection === id ? (
          <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
        )}
      </button>
      {openSection === id && <div className="pb-3 space-y-2">{children}</div>}
    </div>
  );

  return (
    <div className="space-y-0">
      <Section id="location" icon={MapPin} label="Location">
        <input
          type="text"
          placeholder="Search address or area..."
          value={filters.search}
          onChange={(e) => update("search", e.target.value)}
          className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:ring-1 focus:ring-brand-orange-500 focus:border-transparent outline-none"
        />
        <select
          value={filters.city}
          onChange={(e) => update("city", e.target.value)}
          className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:ring-1 focus:ring-brand-orange-500 focus:border-transparent outline-none"
        >
          <option value="">All Cities</option>
          <option value="Sheikh Zayed">Sheikh Zayed</option>
          <option value="6th of October">6th of October</option>
        </select>
      </Section>

      <Section id="format" icon={Layers} label="Format">
        <div className="flex flex-wrap gap-1.5">
          {(["Billboard", "Digital OOH", "Transit", "Street Furniture", "Mall"] as Format[]).map((fmt) => (
            <button
              key={fmt}
              onClick={() => toggleFormat(fmt)}
              className={`px-2.5 py-1 text-[10px] font-semibold rounded-full border transition-all ${
                filters.formats.includes(fmt)
                  ? "bg-brand-orange-500 text-white border-brand-orange-500"
                  : "bg-white text-neutral-500 border-neutral-200 hover:border-brand-orange-300"
              }`}
            >
              {fmt}
            </button>
          ))}
        </div>
      </Section>

      <Section id="specs" icon={Maximize2} label="Specs">
        <label className="flex items-center gap-2 text-xs text-neutral-600 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.digital === true}
            onChange={(e) => update("digital", e.target.checked ? true : null)}
            className="rounded border-neutral-300 text-brand-orange-500 focus:ring-brand-orange-500 w-3.5 h-3.5"
          />
          Digital Only
        </label>
        <label className="flex items-center gap-2 text-xs text-neutral-600 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.illuminated === true}
            onChange={(e) => update("illuminated", e.target.checked ? true : null)}
            className="rounded border-neutral-300 text-brand-orange-500 focus:ring-brand-orange-500 w-3.5 h-3.5"
          />
          Illuminated
        </label>
      </Section>

      <Section id="audience" icon={Users} label="Audience">
        <div>
          <label className="text-[10px] text-neutral-500 mb-1 block">Min Daily Impressions</label>
          <input
            type="range"
            min="0"
            max="70000"
            step="5000"
            value={filters.minImpressions}
            onChange={(e) => update("minImpressions", Number(e.target.value))}
            className="w-full accent-brand-orange-500 h-1"
          />
          <span className="text-[10px] text-neutral-500">{filters.minImpressions.toLocaleString()}+</span>
        </div>
        <select
          value={filters.trafficType}
          onChange={(e) => update("trafficType", e.target.value)}
          className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:ring-1 focus:ring-brand-orange-500 focus:border-transparent outline-none"
        >
          <option value="">All Traffic Types</option>
          <option value="vehicular">Vehicular</option>
          <option value="pedestrian">Pedestrian</option>
          <option value="mixed">Mixed</option>
        </select>
      </Section>

      <Section id="commercial" icon={DollarSign} label="Commercial">
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min $"
            value={filters.minPrice || ""}
            onChange={(e) => update("minPrice", Number(e.target.value))}
            className="w-1/2 px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:ring-1 focus:ring-brand-orange-500 focus:border-transparent outline-none"
          />
          <input
            type="number"
            placeholder="Max $"
            value={filters.maxPrice || ""}
            onChange={(e) => update("maxPrice", Number(e.target.value))}
            className="w-1/2 px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:ring-1 focus:ring-brand-orange-500 focus:border-transparent outline-none"
          />
        </div>
        <select
          value={filters.availability}
          onChange={(e) => update("availability", e.target.value)}
          className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:ring-1 focus:ring-brand-orange-500 focus:border-transparent outline-none"
        >
          <option value="">All Availability</option>
          <option value="available">Available Now</option>
          <option value="limited">Limited Slots</option>
        </select>
      </Section>

      {activeCount > 0 && (
        <button
          onClick={onClear}
          className="w-full py-2 text-[10px] font-semibold text-brand-orange-500 hover:text-brand-orange-600 uppercase tracking-wider transition-colors"
        >
          Clear All ({activeCount})
        </button>
      )}
    </div>
  );
}

/* ─── Price formatter ─── */
function formatPrice(price: number): string {
  if (price >= 1000000) {
    return `${(price / 1000000).toFixed(1)}M`;
  }
  if (price >= 1000) {
    return `${(price / 1000).toFixed(price >= 10000 ? 0 : 1)}K`;
  }
  return price.toLocaleString();
}

/* ─── Inventory Card ─── */
function InventoryCard({
  item,
  isSelected,
  onSelect,
  onAddToPlan,
  isInPlan,
}: {
  item: InventoryItem;
  isSelected: boolean;
  onSelect: () => void;
  onAddToPlan: (item: InventoryItem) => void;
  isInPlan: boolean;
}) {
  const statusConfig = {
    available: { bg: "bg-emerald-500", text: "text-white", dot: "bg-white", label: "Available" },
    limited: { bg: "bg-amber-500", text: "text-white", dot: "bg-white", label: "Limited" },
    booked: { bg: "bg-red-500", text: "text-white", dot: "bg-white", label: "Booked" },
  };

  const status = statusConfig[item.availability];

  return (
    <div
      onClick={onSelect}
      className={`bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
        isSelected
          ? "ring-2 ring-brand-orange-500 shadow-lg"
          : "shadow-sm hover:shadow-md border border-neutral-100"
      }`}
    >
      {/* Image */}
      <div className="relative h-36 overflow-hidden bg-neutral-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            target.parentElement!.classList.add("bg-gradient-to-br", "from-neutral-200", "to-neutral-300");
          }}
        />
        {/* Gradient scrim for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent h-20" />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5">
          <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-white/95 text-neutral-800 backdrop-blur-sm">
            {item.format}
          </span>
          <span className={`flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded-full ${status.bg} ${status.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            {status.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        <h3 className="text-xs font-bold text-neutral-900 leading-tight">{item.name}</h3>
        <p className="text-[10px] text-neutral-400 flex items-center gap-1">
          <MapPin className="w-2.5 h-2.5" />
          {item.address}
        </p>
        <div className="flex items-center gap-3 text-[10px] text-neutral-500">
          <span className="flex items-center gap-1">
            <Ruler className="w-2.5 h-2.5 text-neutral-400" />
            {item.size}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-2.5 h-2.5 text-neutral-400" />
            {item.demographics}
          </span>
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-neutral-50">
          <div>
            <p className="text-[10px] text-neutral-400">Impressions</p>
            <p className="text-xs font-bold text-neutral-900">{item.dailyImpressions.toLocaleString()}/day</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-neutral-400">From</p>
            <p className="text-xs font-bold text-brand-orange-500">{formatPrice(item.pricePerMonth)} EGP/mo</p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToPlan(item);
          }}
          className={`w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border ${
            isInPlan
              ? "bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600"
              : "bg-transparent text-brand-orange-500 border-brand-orange-300 hover:bg-brand-orange-50"
          }`}
        >
          {isInPlan ? <><Check className="w-3 h-3" /> In Plan</> : <><Plus className="w-3 h-3" /> Add to Plan</>}
        </button>
      </div>
    </div>
  );
}

/* ─── Detail Modal ─── */
function DetailModal({
  item,
  onClose,
  onAddToPlan,
  isInPlan,
}: {
  item: InventoryItem;
  onClose: () => void;
  onAddToPlan: (item: InventoryItem) => void;
  isInPlan: boolean;
}) {
  const statusColors = {
    available: "bg-emerald-50 text-emerald-700",
    limited: "bg-amber-50 text-amber-700",
    booked: "bg-red-50 text-red-700",
  };
  const statusLabels = {
    available: "Available Now",
    limited: `Limited — from ${item.availableFrom || "soon"}`,
    booked: `Booked until ${item.bookedUntil}`,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="relative h-56 bg-neutral-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              t.style.display = "none";
              t.parentElement!.classList.add("bg-gradient-to-br", "from-neutral-200", "to-neutral-300");
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow"
          >
            <X className="w-4 h-4 text-neutral-700" />
          </button>
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${item.digital ? "bg-purple-100 text-purple-700" : "bg-brand-orange-100 text-brand-orange-700"}`}>
              {item.format}
            </span>
            <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${statusColors[item.availability]}`}>
              {statusLabels[item.availability]}
            </span>
          </div>
        </div>

        <div className="p-5 space-y-5">
          <div>
            <h2 className="font-display text-xl font-black text-neutral-950 uppercase">{item.name}</h2>
            <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {item.address}, {item.city}
            </p>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Size", value: item.size },
              { label: "Illuminated", value: item.illuminated ? "Yes" : "No" },
              { label: "Traffic", value: item.trafficType },
              { label: "Min Booking", value: `${item.minimumWeeks}wk` },
            ].map((s) => (
              <div key={s.label} className="bg-neutral-50 rounded-lg p-2.5 text-center">
                <p className="text-[10px] text-neutral-400">{s.label}</p>
                <p className="text-xs font-bold text-neutral-900 capitalize">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-brand-orange-50 rounded-xl p-3 text-center">
              <p className="text-[10px] text-brand-orange-600">Est. Daily Impressions</p>
              <p className="text-xl font-black text-brand-orange-500">{item.dailyImpressions.toLocaleString()}</p>
            </div>
            <div className="bg-brand-orange-50 rounded-xl p-3 text-center">
              <p className="text-[10px] text-brand-orange-600">Monthly Rate</p>
              <p className="text-xl font-black text-brand-orange-500">{formatPrice(item.pricePerMonth)} EGP</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 mb-1.5">Target Audience</h3>
            <p className="text-sm text-neutral-600">{item.demographics}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 mb-1.5">Nearby Points of Interest</h3>
            <div className="flex flex-wrap gap-1.5">
              {item.nearbyPOIs.map((poi, i) => (
                <span key={i} className="px-2 py-0.5 text-[10px] bg-neutral-100 text-neutral-600 rounded-full">{poi}</span>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onAddToPlan(item)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                isInPlan ? "bg-emerald-500 text-white hover:bg-emerald-600" : "bg-brand-orange-500 text-white hover:bg-brand-orange-600"
              }`}
            >
              {isInPlan ? <><Check className="w-3.5 h-3.5" /> In Your Plan</> : <><Plus className="w-3.5 h-3.5" /> Add to Plan</>}
            </button>
            <button className="px-5 py-2.5 border border-neutral-200 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-600 hover:border-brand-orange-300 hover:text-brand-orange-500 transition-all">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Plan Tray ─── */
function PlanTray({ plan, onRemove, onClear }: { plan: InventoryItem[]; onRemove: (id: string) => void; onClear: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const totalImpressions = plan.reduce((s, i) => s + i.dailyImpressions, 0);
  const totalCost = plan.reduce((s, i) => s + i.pricePerMonth, 0);

  if (plan.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div onClick={() => setExpanded(!expanded)} className="flex items-center justify-between px-5 py-3 cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-brand-orange-500 rounded-full flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-neutral-900">{plan.length} Site{plan.length > 1 ? "s" : ""} in Plan</p>
            <p className="text-[10px] text-neutral-400">{totalImpressions.toLocaleString()} daily impressions</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] text-neutral-400">Monthly</p>
            <p className="text-sm font-black text-brand-orange-500">{formatPrice(totalCost)} EGP</p>
          </div>
          {expanded ? <ChevronDown className="w-4 h-4 text-neutral-400" /> : <ChevronUp className="w-4 h-4 text-neutral-400" />}
        </div>
      </div>

      {expanded && (
        <div className="px-5 pb-4 border-t border-neutral-100">
          <div className="flex gap-2 overflow-x-auto py-2.5">
            {plan.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-56 bg-neutral-50 rounded-lg p-2.5 flex gap-2.5 relative">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-md object-cover" onError={(e) => { (e.target as HTMLImageElement).classList.add("bg-neutral-200"); }} />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-neutral-900 truncate">{item.name}</p>
                  <p className="text-[10px] text-neutral-400">{item.format}</p>
                  <p className="text-[10px] text-brand-orange-500 font-bold">{formatPrice(item.pricePerMonth)} EGP/mo</p>
                </div>
                <button onClick={() => onRemove(item.id)} className="absolute top-1.5 right-1.5 text-neutral-300 hover:text-red-500 transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            <button onClick={onClear} className="px-3 py-2 text-[10px] text-neutral-400 hover:text-red-500 font-medium transition-colors">Clear</button>
            <button className="flex-1 py-2.5 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all">
              Request Availability for {plan.length} Sites
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Main Page ─── */
export const MediaFinder: React.FC = () => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [plan, setPlan] = useState<InventoryItem[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [mobileView, setMobileView] = useState<"map" | "list">("map");

  const filteredItems = useMemo(() => {
    return inventory.filter((item) => {
      if (filters.search && !item.name.toLowerCase().includes(filters.search.toLowerCase()) && !item.address.toLowerCase().includes(filters.search.toLowerCase()) && !item.district.toLowerCase().includes(filters.search.toLowerCase())) return false;
      if (filters.city && item.city !== filters.city) return false;
      if (filters.formats.length > 0 && !filters.formats.includes(item.format)) return false;
      if (filters.digital !== null && item.digital !== filters.digital) return false;
      if (filters.illuminated !== null && item.illuminated !== filters.illuminated) return false;
      if (filters.availability && item.availability !== filters.availability) return false;
      if (item.dailyImpressions < filters.minImpressions) return false;
      if (filters.trafficType && item.trafficType !== filters.trafficType) return false;
      if (filters.minPrice > 0 && item.pricePerMonth < filters.minPrice) return false;
      if (filters.maxPrice > 0 && item.pricePerMonth > filters.maxPrice) return false;
      return true;
    });
  }, [filters]);

  const activeFilterCount = useMemo(() => {
    let c = 0;
    if (filters.city) c++;
    c += filters.formats.length;
    if (filters.digital !== null) c++;
    if (filters.illuminated !== null) c++;
    if (filters.availability) c++;
    if (filters.minImpressions > 0) c++;
    if (filters.trafficType) c++;
    if (filters.minPrice > 0) c++;
    if (filters.maxPrice > 0) c++;
    return c;
  }, [filters]);

  const clearFilters = () => setFilters(defaultFilters);

  const addToPlan = (item: InventoryItem) => {
    setPlan((prev) => prev.find((p) => p.id === item.id) ? prev.filter((p) => p.id !== item.id) : [...prev, item]);
  };

  const removeFromPlan = (id: string) => setPlan((prev) => prev.filter((p) => p.id !== id));

  const isInPlan = (id: string) => plan.some((p) => p.id === id);

  const handleSelectItem = (item: InventoryItem) => {
    setSelectedItem(item);
    if (mobileView === "map") setMobileView("list");
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Header */}
      <section className="relative pt-28 pb-0 md:pt-36 overflow-hidden" style={{ backgroundColor: '#ea580c' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Media Finder</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
            MEDIA FINDER
          </h1>
          <p className="text-white/80 mt-2 text-sm">
            {filteredItems.length} locations across Sheikh Zayed & 6th of October
          </p>
        </div>
      </section>

      {/* Mobile toggle */}
      <div className="lg:hidden flex border-b border-neutral-100 bg-white">
        <button onClick={() => setMobileView("map")} className={`flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors ${mobileView === "map" ? "text-brand-orange-500 border-b-2 border-brand-orange-500" : "text-neutral-400"}`}>
          <MapPin className="w-3 h-3 inline mr-1" /> Map
        </button>
        <button onClick={() => setMobileView("list")} className={`flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors ${mobileView === "list" ? "text-brand-orange-500 border-b-2 border-brand-orange-500" : "text-neutral-400"}`}>
          <Layers className="w-3 h-3 inline mr-1" /> List ({filteredItems.length})
        </button>
      </div>

      {/* Main Content - Map as bottom layer */}
      <div className="relative h-[calc(100vh-200px)]">
        {/* Map - Full background */}
        <div className={`absolute inset-0 z-0 ${mobileView === "map" ? "block" : "hidden"} lg:block`}>
          <MapContainer center={[29.975, 30.985]} zoom={13} className="w-full h-full" zoomControl={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapEventsHandler onBoundsChange={() => {}} />
            <FlyToMarker item={selectedItem} />

            <MarkerClusterGroup
              chunkedLoading
              maxClusterRadius={50}
              spiderfyOnMaxZoom
              showCoverageOnHover={false}
              iconCreateFunction={(cluster) => {
                const count = cluster.getChildCount();
                return L.divIcon({
                  className: "",
                  html: `<div style="width:36px;height:36px;background:#ea580c;border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;"><span style="color:white;font-size:12px;font-weight:700;">${count}</span></div>`,
                  iconSize: [36, 36],
                  iconAnchor: [18, 18],
                });
              }}
            >
              {filteredItems.map((item) => (
                <Marker
                  key={item.id}
                  position={[item.lat, item.lng]}
                  icon={
                    selectedItem?.id === item.id
                      ? createActivePinIcon(pinColors[item.availability])
                      : createPinIcon(pinColors[item.availability])
                  }
                  eventHandlers={{ click: () => handleSelectItem(item) }}
                >
                  <Popup>
                    <div className="min-w-[180px] p-1">
                      <p className="font-bold text-xs text-neutral-900">{item.name}</p>
                      <p className="text-[10px] text-neutral-500 mt-0.5">{item.format} · {item.size}</p>
                      <p className="text-[10px] text-brand-orange-500 font-bold mt-1">{formatPrice(item.pricePerMonth)} EGP/mo</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </MapContainer>

          {/* Map controls */}
          <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-[1000]">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 transition-colors border-b border-neutral-100">
                <ZoomIn className="w-3.5 h-3.5 text-neutral-600" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 transition-colors">
                <ZoomOut className="w-3.5 h-3.5 text-neutral-600" />
              </button>
            </div>
            <button className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-neutral-50 transition-colors">
              <Crosshair className="w-3.5 h-3.5 text-neutral-600" />
            </button>
          </div>
        </div>

        {/* List Panel - Floating overlay on top of map */}
        <div className={`${mobileView === "list" ? "flex" : "hidden"} lg:flex absolute top-0 left-0 bottom-0 z-10 flex-col w-full lg:w-[400px] xl:w-[440px] bg-white/95 backdrop-blur-md shadow-xl border-r border-neutral-200`}>
          {/* Search + Filter toggle */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-neutral-100">
            <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-50 rounded-lg text-[10px] font-semibold text-neutral-600 hover:bg-neutral-100 transition-colors">
              <SlidersHorizontal className="w-3 h-3" />
              Filters
              {activeFilterCount > 0 && <span className="w-4 h-4 bg-brand-orange-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">{activeFilterCount}</span>}
            </button>
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-neutral-400" />
              <input
                type="text"
                placeholder="Search locations..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full pl-7 pr-2 py-1.5 text-xs border border-neutral-200 rounded-lg focus:ring-1 focus:ring-brand-orange-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Active filter chips */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap gap-1 px-3 py-2 border-b border-neutral-50">
              {filters.city && (
                <button onClick={() => setFilters({ ...filters, city: "" })} className="flex items-center gap-0.5 px-2 py-0.5 bg-brand-orange-50 text-brand-orange-600 text-[10px] font-medium rounded-full hover:bg-brand-orange-100 transition-colors">
                  {filters.city} <X className="w-2.5 h-2.5" />
                </button>
              )}
              {filters.formats.map((fmt) => (
                <button key={fmt} onClick={() => setFilters({ ...filters, formats: filters.formats.filter((f) => f !== fmt) })} className="flex items-center gap-0.5 px-2 py-0.5 bg-brand-orange-50 text-brand-orange-600 text-[10px] font-medium rounded-full hover:bg-brand-orange-100 transition-colors">
                  {fmt} <X className="w-2.5 h-2.5" />
                </button>
              ))}
              {filters.digital === true && (
                <button onClick={() => setFilters({ ...filters, digital: null })} className="flex items-center gap-0.5 px-2 py-0.5 bg-brand-orange-50 text-brand-orange-600 text-[10px] font-medium rounded-full hover:bg-brand-orange-100 transition-colors">
                  Digital <X className="w-2.5 h-2.5" />
                </button>
              )}
              {filters.availability && (
                <button onClick={() => setFilters({ ...filters, availability: "" })} className="flex items-center gap-0.5 px-2 py-0.5 bg-brand-orange-50 text-brand-orange-600 text-[10px] font-medium rounded-full hover:bg-brand-orange-100 transition-colors">
                  {filters.availability} <X className="w-2.5 h-2.5" />
                </button>
              )}
            </div>
          )}

          {/* Filters */}
          {showFilters && (
            <div className="px-3 py-2 border-b border-neutral-100 max-h-[240px] overflow-y-auto">
              <FilterPanel filters={filters} setFilters={setFilters} activeCount={activeFilterCount} onClear={clearFilters} />
            </div>
          )}

          {/* Sticky results count */}
          <div className="px-3 py-2 bg-neutral-50 border-b border-neutral-100 flex items-center justify-between">
            <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
              {filteredItems.length} Result{filteredItems.length !== 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-1.5 text-[10px] text-neutral-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" /> Available
              <span className="inline-block w-2 h-2 rounded-full bg-amber-500 ml-1" /> Limited
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 ml-1" /> Booked
            </div>
          </div>

          {/* Inventory list */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <MapPin className="w-8 h-8 text-neutral-300 mx-auto mb-2" />
                <p className="text-xs text-neutral-500 font-medium">No locations match your filters</p>
                <button onClick={clearFilters} className="mt-1 text-brand-orange-500 text-[10px] font-medium hover:underline">Clear all filters</button>
              </div>
            ) : (
              filteredItems.map((item) => (
                <InventoryCard key={item.id} item={item} isSelected={selectedItem?.id === item.id} onSelect={() => handleSelectItem(item)} onAddToPlan={addToPlan} isInPlan={isInPlan(item.id)} />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} onAddToPlan={addToPlan} isInPlan={isInPlan(selectedItem.id)} />}

      {/* Plan Tray */}
      <PlanTray plan={plan} onRemove={removeFromPlan} onClear={() => setPlan([])} />
    </div>
  );
};
